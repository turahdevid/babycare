import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function ExampleAuthPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const isAdmin = session.user.role === "ADMIN";
  const isMidwife = session.user.role === "MIDWIFE";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-xl">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Authentication Example
          </h1>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/40 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">
                Session Information
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">User ID:</span> {session.user.id}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {session.user.email}
                </p>
                <p>
                  <span className="font-medium">Role:</span>{" "}
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      isAdmin
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {session.user.role}
                  </span>
                </p>
                {session.user.name && (
                  <p>
                    <span className="font-medium">Name:</span> {session.user.name}
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">
                Role-Based Access Control
              </h2>
              <div className="space-y-3">
                {isAdmin && (
                  <div className="rounded-xl bg-purple-50 p-4">
                    <p className="font-medium text-purple-700">
                      ✓ Admin Access Granted
                    </p>
                    <p className="mt-1 text-sm text-purple-600">
                      You have full administrative privileges.
                    </p>
                  </div>
                )}

                {isMidwife && (
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="font-medium text-blue-700">
                      ✓ Midwife Access Granted
                    </p>
                    <p className="mt-1 text-sm text-blue-600">
                      You can manage reservations and patient records.
                    </p>
                  </div>
                )}

                <div className="rounded-xl bg-green-50 p-4">
                  <p className="font-medium text-green-700">
                    ✓ Authenticated User
                  </p>
                  <p className="mt-1 text-sm text-green-600">
                    You are logged in and can access protected routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/50 p-6 backdrop-blur-sm">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">
                Example: Role Checking in Server Components
              </h2>
              <pre className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-sm text-gray-100">
                <code>{`import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  // Check for specific role
  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  // User is authenticated and has ADMIN role
  return <div>Admin Content</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
