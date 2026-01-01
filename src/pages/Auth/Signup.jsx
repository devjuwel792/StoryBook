import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  BookOpen,
  Mail,
  Lock,
  User,
  Shield,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import bgImg from "../../assets/bg.png";
import { useNavigate } from "react-router";

const InputField = ({
  label,
  type,
  icon: Icon,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  note,
  showPasswordToggle,
  isPasswordVisible,
  onTogglePassword,
  name,
  ...props
}) => (
  <div className="relative">
    <label className="flex items-center gap-2 font-bold text-sm md:text-base text-gray-700 mb-2">
      <Icon size={16} className="text-teal-600" />
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-3 md:px-6 md:py-4 border rounded-2xl text-base md:text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
          error && touched
            ? "border-red-300 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        aria-invalid={error && touched ? "true" : "false"}
        aria-describedby={
          error && touched
            ? `${name}-error`
            : note
            ? `${name}-note`
            : undefined
        }
        {...props}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
    {note && !error && (
      <p id={`${name}-note`} className="text-xs text-gray-500 font-normal mt-1 pl-1">
        {note}
      </p>
    )}
    {error && touched && (
      <div
        id={`${name}-error`}
        className="flex items-center gap-1 mt-1 pl-1 text-red-600 text-sm"
      >
        <AlertCircle size={14} />
        <span>{error}</span>
      </div>
    )}
  </div>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: null,
    vocabularyLevel: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Password strength indicators
  const passwordStrength = {
    minLength: formData.password.length >= 6,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasLowerCase: /[a-z]/.test(formData.password),
    hasNumber: /\d/.test(formData.password),
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.grade) {
      newErrors.grade = "Please select your grade";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    // Validate specific field on blur
    if (
      field === "email" &&
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else if (
      field === "password" &&
      formData.password &&
      formData.password.length < 6
    ) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
    } else if (
      field === "confirmPassword" &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      grade: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Signup submitted:", formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        grade: null,
        password: "",
        confirmPassword: "",
      });
      setTouched({});
      alert("Account created successfully! Welcome aboard! 🚀");
    }

    setIsSubmitting(false);
  };

  // Focus first input on mount
  useEffect(() => {
    const firstInput = formRef.current?.querySelector("input");
    firstInput?.focus();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with performance optimization */}
      <img
        src={bgImg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full  object-cover z-0"
        style={{
          pointerEvents: "none",
          userSelect: "none",
          imageRendering: "crisp-edges",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        loading="eager"
        decoding="async"
      />
      {/* Overlay for opacity-50 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="py-8 md:py-20 px-4 md:px-8 lg:px-24 flex items-center justify-center gap-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[36rem] overflow-hidden">
          {/* Back Button */}
          <button
            className="flex items-center gap-2 text-gray-600 text-sm px-4 pt-4 md:px-6 md:pt-6 hover:text-gray-800"
            onClick={() => window.history.back()}
            aria-label="Go back to home"
          >
            <ArrowLeft size={16} />
            <p className="font-semibold text-base">Back to Home</p>
          </button>

          <div className="px-5 sm:px-8 pt-6 pb-8 md:pb-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div
                className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-16 h-16 flex items-center justify-center"
                aria-hidden="true"
              >
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2939] text-center">
                Join the Adventure! 🚀
              </h1>

              {/* Subtitle */}
              <p className="text-[#4A5565] text-sm sm:text-base md:text-lg font-normal text-center">
                Create your free account and start reading!
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              noValidate
            >
              {/* Name Field */}
              <InputField
                label="Your Name"
                type="text"
                icon={User}
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                error={errors.name}
                touched={touched.name}
                placeholder="Enter your name..."
                required
              />

              {/* Email Field */}
              <InputField
                label="Your Email"
                type="email"
                icon={Mail}
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                placeholder="your@email.com"
                note="We'll send updates to your parent or teacher"
                required
              />
              <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-4 sm:gap-0">
                {/* Grade Selection */}
                <div className="w-full sm:w-auto">
                  <label className="block font-bold text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                    Select Your Grade
                  </label>
                  <div className="flex gap-3 justify-start">
                    {[3, 4, 5].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => {
                          handleInputChange("grade", g);
                          if (errors.grade) {
                            setErrors((prev) => ({ ...prev, grade: "" }));
                          }
                        }}
                        className={`flex-1 sm:flex-none w-auto sm:w-20 md:w-24 h-12 md:h-14 rounded-2xl text-base md:text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                          formData.grade === g
                            ? "bg-teal-500 text-white shadow-lg scale-105"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
                        }`}
                        aria-pressed={formData.grade === g}
                        aria-label={`Grade ${g}`}
                      >
                        Grade {g}
                      </button>
                    ))}
                  </div>
                  {errors.grade && touched.grade && (
                    <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                      <AlertCircle size={14} />
                      <span>{errors.grade}</span>
                    </div>
                  )}
                </div>
                {/* Vocabulary Level */}
                <div className="w-full sm:w-auto">
                  <label className="block font-bold text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                    Vocabulary Level
                  </label>
                  <div className="relative">
                    <select
                      value={formData.vocabularyLevel}
                      onChange={(e) =>
                        handleInputChange("vocabularyLevel", e.target.value)
                      }
                      className={`w-full px-4 py-3 md:px-6 md:py-4 border rounded-2xl text-base md:text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition appearance-none bg-white ${
                        formData.vocabularyLevel
                          ? "text-gray-900"
                          : "text-gray-400"
                      } border-gray-300 hover:border-gray-400`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <InputField
                  label="Create a Password"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onBlur={() => handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  placeholder="At least 6 characters..."
                  required
                  minLength={6}
                  showPasswordToggle={true}
                  isPasswordVisible={showPassword}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                />

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-xl">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Password strength:
                    </p>
                    <div className="space-y-2">
                      {[
                        { key: "minLength", text: "At least 6 characters" },
                        {
                          key: "hasUpperCase",
                          text: "Contains uppercase letter",
                        },
                        {
                          key: "hasLowerCase",
                          text: "Contains lowercase letter",
                        },
                        { key: "hasNumber", text: "Contains number" },
                      ].map((rule) => (
                        <div key={rule.key} className="flex items-center gap-2">
                          <CheckCircle
                            size={16}
                            className={
                              passwordStrength[rule.key]
                                ? "text-green-500"
                                : "text-gray-300"
                            }
                          />
                          <span
                            className={`text-sm ${
                              passwordStrength[rule.key]
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          >
                            {rule.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <InputField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                icon={Lock}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                onBlur={() => handleBlur("confirmPassword")}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                placeholder="Type your password again..."
                required
                minLength={6}
                showPasswordToggle={true}
                isPasswordVisible={showConfirmPassword}
                onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90 hover:shadow-xl active:scale-95"
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <Sparkles color="#FFFFFF" />
                    Create My Account!
                  </>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center font-normal text-base text-gray-600 mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-teal-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                Sign In
              </a>
            </p>

            {/* Security Note */}
            <div
              className="mt-8 bg-teal-50 rounded-2xl p-4 flex items-center gap-3"
              role="note"
              aria-label="Security information"
            >
              <Shield className="text-teal-600 flex-shrink-0" size={20} />
              <p className="text-sm font-normal text-[#364153]">
                <strong>Safe & Secure:</strong> We protect your information and
                never share it with anyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
