// ApplicationForm.jsx
import * as React from "react";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { X, Check, ChevronDown, ChevronUp } from "lucide-react";

// === Utility ===
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// === Dialog ===
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", className)}
    {...props}
  />
));
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
        <X className="w-5 h-5" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
const DialogHeader = ({ className, ...props }) => (
  <div className={cn("mb-4 text-center", className)} {...props} />
);
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-2xl font-bold text-blue-700", className)} {...props} />
));

// === Label ===
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("block text-sm font-medium text-gray-700 mb-1", className)}
    {...props}
  />
));

// === Input ===
const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
      className
    )}
    {...props}
  />
));

// === Textarea ===
const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
      className
    )}
    {...props}
  />
));

// === Button ===
const Button = ({ className, ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition",
      className
    )}
    {...props}
  />
);

// === Select ===
const Select = SelectPrimitive.Root;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 mt-1 w-full rounded-md border bg-white shadow-md",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm hover:bg-blue-50 focus:bg-blue-100",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-2">
      <Check className="h-4 w-4 text-blue-600" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
const SelectValue = SelectPrimitive.Value;

// === Card === (optional)
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border p-6 shadow-sm bg-white", className)} {...props} />
));
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));

// === Main Form ===
export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    enrollmentNumber: "",
    email: "",
    mobile: "",
    residentialStatus: "",
    department: "",
    school: "",
    year: "",
    motivation: "",
    techExpertise: "",
    cv: null,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Application submitted successfully!");
    setIsOpen(false);
    setFormData({
      name: "",
      enrollmentNumber: "",
      email: "",
      mobile: "",
      residentialStatus: "",
      department: "",
      school: "",
      year: "",
      motivation: "",
      techExpertise: "",
      cv: null,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white text-blue-600 hover:bg-gray-100 border border-blue-600">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join the DAC Team</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="enrollment">Enrollment Number *</Label>
              <Input id="enrollment" value={formData.enrollmentNumber} onChange={(e) => handleInputChange("enrollmentNumber", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input id="mobile" type="tel" value={formData.mobile} onChange={(e) => handleInputChange("mobile", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Residential Status *</Label>
              <Select onValueChange={(value) => handleInputChange("residentialStatus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hosteller">Hosteller</SelectItem>
                  <SelectItem value="day-scholar">Day Scholar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>School *</Label>
              <Select onValueChange={(value) => handleInputChange("school", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select school" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soict">School of ICT</SelectItem>
                  <SelectItem value="soet">School of Engineering & Technology</SelectItem>
                  <SelectItem value="som">School of Management</SelectItem>
                  <SelectItem value="sls">School of Law & Legal Studies</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Department *</Label>
              <Select onValueChange={(value) => handleInputChange("department", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="ece">Electronics & Communication</SelectItem>
                  <SelectItem value="me">Mechanical Engineering</SelectItem>
                  <SelectItem value="civil">Civil Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Academic Year *</Label>
              <Select onValueChange={(value) => handleInputChange("year", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1st">1st Year</SelectItem>
                  <SelectItem value="2nd">2nd Year</SelectItem>
                  <SelectItem value="3rd">3rd Year</SelectItem>
                  <SelectItem value="4th">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="motivation">Why do you want to join DAC? *</Label>
            <Textarea id="motivation" rows={4} value={formData.motivation} onChange={(e) => handleInputChange("motivation", e.target.value)} required />
          </div>

          <div>
            <Label htmlFor="tech">Tech Expertise (Optional)</Label>
            <Input id="tech" value={formData.techExpertise} onChange={(e) => handleInputChange("techExpertise", e.target.value)} placeholder="e.g., React, Python, ML..." />
          </div>

          <div>
            <Label htmlFor="cv">Upload CV *</Label>
            <Input id="cv" type="file" accept=".pdf,.docx" onChange={(e) => handleInputChange("cv", e.target.files[0])} required />
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
