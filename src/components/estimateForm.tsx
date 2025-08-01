// src/components/EstimateForm.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Label, TextInput, Textarea, Select, Radio, Checkbox, FileInput } from 'flowbite-react';
import { EstimateFormData } from '@/types';

interface EstimateFormProps {
  selectedService?: string;
}

function EstimateForm({ selectedService }: EstimateFormProps) {
  const [formData, setFormData] = useState<EstimateFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    consentEmail: false,
    consentSMS: false,
    street1: '',
    street2: '',
    city: '',
    state: 'NC',
    zipCode: '',
    serviceType: '',
    projectDescription: '',
    preferredDay: '',
    alternateDay: '',
    preferredTime: 'any',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update serviceType when selectedService prop changes
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceType: selectedService }));
      
      // Optional: Scroll to form when service is selected
      const element = document.getElementById('estimate');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService]); // Dependency on selectedService prop

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: e.target.files || undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  const createContactSection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">Contact Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="firstName" className="mb-2 block">First name *</Label>
          <TextInput
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="lastName" className="mb-2 block">Last name *</Label>
          <TextInput
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Label htmlFor="companyName" className="mb-2 block">Company name (if applicable)</Label>
          <TextInput
            id="companyName"
            name="companyName"
            type="text"
            placeholder="ABC Corporation"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="email" className="mb-2 block">Email *</Label>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="mt-2">
            <Checkbox
              id="consentEmail"
              name="consentEmail"
              checked={formData.consentEmail}
              onChange={handleInputChange}
            />
            <Label htmlFor="consentEmail" className="ml-2 text-sm text-neutral-gray">
              I consent to receiving marketing emails and promotions
            </Label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="phone" className="mb-2 block">Phone number *</Label>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="mt-2">
            <Checkbox
              id="consentSMS"
              name="consentSMS"
              checked={formData.consentSMS}
              onChange={handleInputChange}
            />
            <Label htmlFor="consentSMS" className="ml-2 text-sm text-neutral-gray">
              I agree to receive text messages (SMS)
            </Label>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const createAddressSection = () => (
    <div className="space-y-6 mt-8">
      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">Address</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Label htmlFor="street1" className="mb-2 block">Street 1 *</Label>
          <TextInput
            id="street1"
            name="street1"
            type="text"
            placeholder="123 Main Street"
            value={formData.street1}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Label htmlFor="street2" className="mb-2 block">Street 2</Label>
          <TextInput
            id="street2"
            name="street2"
            type="text"
            placeholder="Apt, Suite, etc."
            value={formData.street2}
            onChange={handleInputChange}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="city" className="mb-2 block">City *</Label>
          <TextInput
            id="city"
            name="city"
            type="text"
            placeholder="Raleigh"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="state" className="mb-2 block">State *</Label>
          <Select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          >
            <option value="NC">North Carolina</option>
            <option value="SC">South Carolina</option>
            <option value="VA">Virginia</option>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="zipCode" className="mb-2 block">ZIP code *</Label>
          <TextInput
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="27526"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
        </motion.div>
      </div>
    </div>
  );

  const createServiceSection = () => (
    <div className="space-y-6 mt-8">
      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">Service Details</h3>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Label htmlFor="serviceType" className="mb-2 block">Service Type *</Label>
        <Select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a service</option>
          <option value="interior-painting">Interior Painting</option>
          <option value="exterior-painting">Exterior Painting</option>
          <option value="renovations">Renovations</option>
          <option value="drywall">Drywall Repair</option>
          <option value="commercial">Commercial Painting</option>
          <option value="residential">Residential Painting</option>
          <option value="remodeling">Interior Remodeling</option>
          <option value="flooring">Flooring</option>
          <option value="other">Other</option>
        </Select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Label htmlFor="projectDescription" className="mb-2 block">
          Please provide as much information as you can *
        </Label>
        <Textarea
          id="projectDescription"
          name="projectDescription"
          placeholder="Describe your project in detail..."
          value={formData.projectDescription}
          onChange={handleInputChange}
          rows={6}
          required
        />
      </motion.div>
    </div>
  );

  const createAvailabilitySection = () => (
    <div className="space-y-6 mt-8">
      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">Your Availability</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="preferredDay" className="mb-2 block">
            Which day would be best for an assessment? *
          </Label>
          <TextInput
            id="preferredDay"
            name="preferredDay"
            type="date"
            value={formData.preferredDay}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="alternateDay" className="mb-2 block">
            What is another day that works for you? (optional)
          </Label>
          <TextInput
            id="alternateDay"
            name="alternateDay"
            type="date"
            value={formData.alternateDay}
            onChange={handleInputChange}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Label className="mb-2 block">What are your preferred arrival times? (optional)</Label>
          <div className="flex flex-wrap gap-4">
            <Radio
              id="time-any"
              name="preferredTime"
              value="any"
              checked={formData.preferredTime === 'any'}
              onChange={handleInputChange}
            />
            <Label htmlFor="time-any">Any time</Label>
            
            <Radio
              id="time-morning"
              name="preferredTime"
              value="morning"
              checked={formData.preferredTime === 'morning'}
              onChange={handleInputChange}
            />
            <Label htmlFor="time-morning">Morning</Label>
            
            <Radio
              id="time-afternoon"
              name="preferredTime"
              value="afternoon"
              checked={formData.preferredTime === 'afternoon'}
              onChange={handleInputChange}
            />
            <Label htmlFor="time-afternoon">Afternoon</Label>
            
            <Radio
              id="time-evening"
              name="preferredTime"
              value="evening"
              checked={formData.preferredTime === 'evening'}
              onChange={handleInputChange}
            />
            <Label htmlFor="time-evening">Evening</Label>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const createUploadSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">Upload Images (optional)</h3>
      <Label htmlFor="images" className="mb-2 block">Share images of the work to be done</Label>
      <FileInput
        id="images"
        name="images"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <p className="mt-1 text-sm text-neutral-gray">PNG, JPG or GIF (MAX. 10MB per file)</p>
    </motion.div>
  );

  const createSubmitSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success/10 border border-success text-success px-6 py-4 rounded-lg text-center"
        >
          <strong className="font-bold text-lg">Success!</strong>
          <p className="mt-2">Thank you for your submission. We'll contact you within 24 hours with your estimate.</p>
        </motion.div>
      ) : (
        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            className="bg-accent hover:bg-accent-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
          </Button>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="estimate" className="section bg-neutral-off-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a detailed estimate
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            {createContactSection()}
            {createAddressSection()}
            {createServiceSection()}
            {createAvailabilitySection()}
            {createUploadSection()}
            {createSubmitSection()}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default EstimateForm;