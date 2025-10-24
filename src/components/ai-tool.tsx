"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateProjectDescription } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";

const initialState = {
  message: "",
  errors: {},
  description: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate Description"}
    </Button>
  );
}

export default function AiTool() {
  const [state, formAction] = useFormState(generateProjectDescription, initialState);

  return (
    <section id="ai-tool" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Wand2 className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI Project Description Generator</h2>
          <p className="mt-4 text-muted-foreground">
            Struggling with words? Input your project details and let AI craft a compelling description for you.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Provide the title, tech stack, and keywords for your project.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input id="title" name="title" placeholder="e.g., Real-time Chat App" />
                   {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="techStack">Tech Stack (comma-separated)</Label>
                  <Input id="techStack" name="techStack" placeholder="e.g., React, Firebase, Tailwind CSS" />
                   {state.errors?.techStack && <p className="text-sm font-medium text-destructive">{state.errors.techStack[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Input id="keywords" name="keywords" placeholder="e.g., collaboration, messaging, real-time" />
                   {state.errors?.keywords && <p className="text-sm font-medium text-destructive">{state.errors.keywords[0]}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Generated Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  readOnly
                  value={state.description}
                  placeholder="Your generated project description will appear here..."
                  className="min-h-[220px] bg-secondary"
                />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4 flex justify-between items-center">
              <p className="text-sm text-destructive">
                {state.message !== "success" && state.message}
              </p>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
