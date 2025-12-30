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

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: null,
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
    if (field === 'email' && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
    } else if (field === 'password' && formData.password && formData.password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
    } else if (field === 'confirmPassword' && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
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
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    const firstInput = formRef.current?.querySelector('input');
    firstInput?.focus();
  }, []);

  const InputField = ({ label, type, icon: Icon, field, placeholder, note, ...props }) => (
    <div className="relative">
      <label className="flex items-center gap-2 font-bold text-base text-gray-700 mb-2">
        <Icon size={16} className="text-teal-600" />
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onBlur={() => handleBlur(field)}
          placeholder={placeholder}
          className={`w-full px-6 py-4 border rounded-2xl text-lg font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
            errors[field] && touched[field]
              ? "border-red-300 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          aria-invalid={errors[field] && touched[field] ? "true" : "false"}
          aria-describedby={errors[field] ? `${field}-error` : note ? `${field}-note` : undefined}
          {...props}
        />
        {(field === 'password' || field === 'confirmPassword') && (
          <button
            type="button"
            onClick={() => field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={`${showPassword ? 'Hide' : 'Show'} password`}
          >
            {field === 'password' ? (
              showPassword ? <EyeOff size={20} /> : <Eye size={20} />
            ) : (
              showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />
            )}
          </button>
        )}
      </div>
      {note && !errors[field] && (
        <p id={`${field}-note`} className="text-xs text-gray-500 font-normal mt-1 pl-1">
          {note}
        </p>
      )}
      {errors[field] && touched[field] && (
        <div id={`${field}-error`} className="flex items-center gap-1 mt-1 pl-1 text-red-600 text-sm">
          <AlertCircle size={14} />
          <span>{errors[field]}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with performance optimization */}
      <img
        src={bgImg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full  object-cover z-0"
        style={{ 
          pointerEvents: 'none', 
          userSelect: 'none',
          imageRendering: 'crisp-edges',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
        loading="eager"
        decoding="async"
      />
      {/* Overlay for opacity-50 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"/>
      <div className="py-20 px-4 md:px-8 lg:px-24 flex items-center justify-center gap-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[36rem] overflow-hidden">
          {/* Back Button */}
          <button 
            className="flex items-center gap-2 text-gray-600 text-sm px-6 pt-6 hover:text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
            onClick={() => window.history.back()}
            aria-label="Go back to home"
          >
            <ArrowLeft size={16} />
            <p className="font-semibold text-base">Back to Home</p>
          </button>

          <div className="px-4  md:px-8 pt-6 pb-10">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center gap-3 mb-8">
              <div 
                className="bg-gradient-to-b from-[#87CEEB] to-[#98D8C8] rounded-full w-16 h-16 flex items-center justify-center"
                aria-hidden="true"
              >
                <BookOpen className="w-9 h-9 text-white" />
              </div>
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#1E2939] text-center">
                Join the Adventure! 🚀
              </h1>

              {/* Subtitle */}
              <p className="text-[#4A5565] text-base md:text-lg font-normal text-center">
                Create your free account and start reading!
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <InputField
                label="Your Name"
                type="text"
                icon={User}
                field="name"
                placeholder="Enter your name..."
                required
              />

              {/* Email Field */}
              <InputField
                label="Your Email"
                type="email"
                icon={Mail}
                field="email"
                placeholder="your@email.com"
                note="We'll send updates to your parent or teacher"
                required
              />

              {/* Grade Selection */}
              <div>
                <label className="block font-bold text-base text-gray-700 mb-3">
                  Select Your Grade
                </label>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => {
                        handleInputChange('grade', g);
                        if (errors.grade) {
                          setErrors((prev) => ({ ...prev, grade: "" }));
                        }
                      }}
                      className={`w-20 md:w-24 h-14 rounded-2xl text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
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

              {/* Password Field */}
              <div>
                <InputField
                  label="Create a Password"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  field="password"
                  placeholder="At least 6 characters..."
                  required
                  minLength={6}
                />
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-xl">
                    <p className="text-sm font-medium text-gray-700 mb-2">Password strength:</p>
                    <div className="space-y-2">
                      {[
                        { key: 'minLength', text: 'At least 6 characters' },
                        { key: 'hasUpperCase', text: 'Contains uppercase letter' },
                        { key: 'hasLowerCase', text: 'Contains lowercase letter' },
                        { key: 'hasNumber', text: 'Contains number' },
                      ].map((rule) => (
                        <div key={rule.key} className="flex items-center gap-2">
                          <CheckCircle 
                            size={16} 
                            className={passwordStrength[rule.key] ? "text-green-500" : "text-gray-300"} 
                          />
                          <span className={`text-sm ${passwordStrength[rule.key] ? "text-green-600" : "text-gray-500"}`}>
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
                field="confirmPassword"
                placeholder="Type your password again..."
                required
                minLength={6}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#98D8C8] to-[#1F3A2B] text-white font-bold text-lg py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
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