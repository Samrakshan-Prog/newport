'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner'; // ✅ same as before

import { Button } from './ui/stateful-button';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdklnzva', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success('Message sent successfully 🎉');
        form.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <button className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors">
              <Link href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </Link>
            </button>{' '}
            or through this form.
          </>
        }
      />

      {/* ✅ Custom handler instead of default Formspree redirect */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
        <div className="w-full max-w-xl">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="hello@gmail.com"
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
            )}
          />
        </div>

        <div className="w-full max-w-xl">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Hello! What's up?"
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
            )}
          ></textarea>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </motion.section>
  );
};
