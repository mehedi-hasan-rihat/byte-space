import AuthLeft from "@/components/AuthLeft";
import { FormInput } from "@/components/ui/FormInput";
import { AuthButton } from "@/components/ui/AuthButton";

export default function Signin() {
  return (
    <section className="min-h-screen bg-[#003BE2] hero-grid ">
      <div className="max-w-360 mx-auto px-30 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5 pb-11">
          <svg
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
              fill="#D4FB20"
            />
            <path
              d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
              fill="#D4FB20"
            />
          </svg>
          <span
            className="text-[22px] font-bold text-white"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            ByteSpace
          </span>
        </div>

        <div className="flex items-start gap-16">
          <div className="flex-1 space-y-4">
            <h4 className="text-[20px] font-semibold text-[#F5F5F6] font-poppins">
              Sign in with ease
            </h4>
            <p className="text-lg text-[#F5F5F6] font-normal leading-[160%] max-w-118">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
            <div className="mt-44">
              <AuthLeft />
            </div>
          </div>

          <div className="w-144.75 shrink-0 rounded-3xl bg-white p-15 pb-10 mt-2">
            {/* Header */}
            <p className="text-[18px] font-no text-[#003BE2]">Sign In</p>
            <h2 className="mt-1 text-[44px] font-semibold leading-tight text-[#242528] font-poppins">
              Welcome Back
            </h2>

            <form className="mt-10 space-y-5" noValidate>
              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
              />

              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••••"
                autoComplete="current-password"
              />

              <div className="flex justify-end pt-2">
                <AuthButton type="submit">Sign In</AuthButton>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-18 mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E5E6E8]" />
              <span className="text-[14px] text-[#82868E]">or</span>
              <div className="h-px flex-1 bg-[#E5E6E8]" />
            </div>

            <div className="flex justify-center gap-4">
              {/* Facebook */}
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="flex h-15 w-15 items-center justify-center rounded-2xl border border-[#E5E6E8] bg-white transition hover:bg-[#F5F5F6]"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 28.3187 9.42826 35.2138 17.396 36.4641V24.8176H13.1642V19.9999H17.396V16.328C17.396 12.151 19.8842 9.84366 23.6912 9.84366C25.5147 9.84366 27.422 10.1692 27.422 10.1692V14.2707H25.3204C23.25 14.2707 22.6043 15.5555 22.6043 16.8735V19.9999H27.2267L26.4878 24.8176H22.6043V36.4641C30.5721 35.2138 36.6668 28.3187 36.6668 19.9999Z"
                    fill="black"
                  />
                </svg>
              </button>

              {/* Google */}
              <button
                type="button"
                aria-label="Sign in with Google"
                className="flex h-15 w-15 items-center justify-center rounded-2xl border border-[#E5E6E8] bg-white transition hover:bg-[#F5F5F6]"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9585 20.3749C35.9585 19.2777 35.8613 18.236 35.6946 17.2221H20.0002V23.486H28.9863C28.5835 25.5416 27.4029 27.2777 25.6529 28.4583V32.6249H31.0141C34.1529 29.7221 35.9585 25.4444 35.9585 20.3749Z"
                    fill="black"
                  />
                  <path
                    d="M20.0002 9.93047C22.4585 9.93047 24.6529 10.7777 26.3891 12.4305L31.1391 7.68048C28.2641 4.98603 24.5002 3.33325 20.0002 3.33325C13.4863 3.33325 7.86127 7.08326 5.12516 12.5277L10.6529 16.8194C11.9724 12.861 15.6529 9.93047 20.0002 9.93047Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.0002 36.6666C13.4863 36.6666 7.86127 32.9166 5.12516 27.4721L10.6529 23.1805C11.9724 27.1388 15.6529 30.0694 20.0002 30.0694C22.2502 30.0694 24.1529 29.4583 25.6529 28.4583L31.0141 32.6249C28.2641 35.1666 24.5002 36.6666 20.0002 36.6666ZM10.6529 16.8194V12.5277H5.12516L10.6529 16.8194Z"
                    fill="black"
                  />
                  <path
                    d="M5.12516 23.1805H10.6529C10.3057 22.1805 10.1252 21.111 10.1252 19.9999C10.1252 18.8888 10.3196 17.8194 10.6529 16.8194L5.12516 12.5277C3.98627 14.7777 3.3335 17.3055 3.3335 19.9999C3.3335 22.6944 3.98627 25.2221 5.12516 27.4721V23.1805Z"
                    fill="black"
                  />
                  <path
                    d="M10.6529 23.1805H5.12516V27.4721L10.6529 23.1805Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            {/* Footer link */}
            <p className="mt-16 text-center font-normal text-[14px] text-[#888888]">
              New user?{" "}
              <a
                href="/signup"
                className="font-normal text-[#003BE2] hover:underline"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
