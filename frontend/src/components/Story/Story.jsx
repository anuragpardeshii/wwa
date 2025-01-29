import React from 'react';
import { BookOpen, Heart, Lightbulb, Users, Target, Sparkles } from 'lucide-react';
import children from "/src/assets/images/army/70373068_2499242406811563_218327983818014720_n.png"

export default function OurStory() {
  return (
    <div className="bg-gradient-to-b from-[#edf1f9] via-[#edf1f9] to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  text-gray-900">Our Story</h2>
          <p className="mt-4 text-xl text-[#0f335a] font-medium">Hello, Dear Parent!</p>
          <p className="mt-2 text-lg text-gray-600">
            Welcome to the World of Growth and Possibility at Wisdom World Academy!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="relative">
            <img
              src={children}
              alt="Children learning together"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-gray-600 italic">
                "Every child deserves an education that sparks joy and ignites curiosity."
              </p>
              <p className="mt-2 text-[#0f335a] font-medium">- Swati Pardeshi</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                At Wisdom World Academy, we recognize the importance of the role you play in your child's education. Our partnership with parents is integral to the success of our students. We take the time to understand your aspirations for your child and actively involve you in their educational journey.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#0f335a] mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Understanding Parents' Hopes and Concerns
              </h3>
              <p className="text-gray-600">
                As a parent, you want the best for your child—an environment that challenges, nurtures, and inspires them. We acknowledge the concerns that come with entrusting your child's education to others.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 text-[#0f335a] mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Our Focus</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Creating a safe, nurturing, and bias-free environment where children can explore, learn, and thrive.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 text-[#0f335a] mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Our Promise</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Delivering excellence in education while nurturing each child's unique talents and abilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <BookOpen className="w-10 h-10 text-[#0f335a] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why We Were Founded</h3>
            <p className="text-gray-600">
              Born from a passion for transformative education that blends tradition with innovation. Our founders envisioned a school where children would actively engage with their learning.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Lightbulb className="w-10 h-10 text-[#0f335a] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Driven by Innovation</h3>
            <p className="text-gray-600">
              We continuously evolve, integrating innovative teaching methods and advanced learning technologies to keep education engaging and relevant.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Users className="w-10 h-10 text-[#0f335a] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Development</h3>
            <p className="text-gray-600">
              Our unique approach ensures every child receives the support they need to flourish, fostering confidence and capability.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0f335a] mb-6">Join Our Story</h3>
          <p className="text-lg text-gray-600 mb-8">
            Wisdom World Academy is not just a school—it's a community of dedicated educators, parents, and students, all working together toward a common goal. Our story is one of commitment to excellence, where every child is valued, and every success is celebrated.
          </p>
          <a href='/enquiry' className="inline-flex items-center justify-center gap-2 bg-[#ffc300] text-white px-8 py-4 rounded-xl cursor-pointer">
            <span className="font-medium">Be Part of Our Journey</span>
            <BookOpen className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}