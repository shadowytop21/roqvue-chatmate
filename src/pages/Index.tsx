
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-12 md:pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground mb-4">
            Introducing Roqvue AI
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Experience the future of conversation
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Engage with Roqvue, an advanced AI designed to understand, assist, and evolve with every interaction.
          </p>
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button size="lg" className="rounded-full">
              Start chatting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Learn more
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Chat Preview Section */}
      <section className="container px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 shadow-lg bg-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">User</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>How can you help me with my tasks?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Roqvue</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <p>
                      I can assist you with a wide range of tasks, from writing and analysis to answering questions and solving problems. Think of me as your personal AI assistant, ready to help make your work more efficient and effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: <MessageSquare className="h-6 w-6" />,
              title: "Natural Conversations",
              description: "Engage in fluid, context-aware discussions that feel natural and intuitive."
            },
            {
              icon: <User className="h-6 w-6" />,
              title: "Personalized Assistance",
              description: "Get tailored responses and solutions based on your specific needs and preferences."
            },
            {
              icon: <ArrowRight className="h-6 w-6" />,
              title: "Continuous Learning",
              description: "Benefit from an AI that evolves and improves with every interaction."
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
