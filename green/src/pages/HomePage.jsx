import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Trophy, TrendingUp } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-go-green-50 to-white py-20 mb-16">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            مرحباً بك في Go Green
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            اكتشف أفضل المنتجات البيئية والصديقة للطبيعة. نحتفي بحياة أخضر وأنظف.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-go-green-700 text-white rounded-lg font-medium hover:bg-go-green-800 transition-colors">
              تسوق الآن
            </button>
            <Link to="/prediction" className="px-8 py-3 border-2 border-go-green-700 text-go-green-700 rounded-lg font-medium hover:bg-go-green-50 transition-colors">
              توقعات المباريات
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <Leaf className="w-12 h-12 text-go-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              منتجات طبيعية
            </h3>
            <p className="text-gray-600">
              كل منتجاتنا مصنوعة من مواد طبيعية وآمنة على البيئة
            </p>
          </div>

          <div className="card p-8 text-center">
            <TrendingUp className="w-12 h-12 text-go-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              جودة عالية
            </h3>
            <p className="text-gray-600">
              نختار أفضل المنتجات لضمان رضاك وجودة حياتك
            </p>
          </div>

          <div className="card p-8 text-center">
            <Trophy className="w-12 h-12 text-go-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              موثوق ومعتمد
            </h3>
            <p className="text-gray-600">
              جميع منتجاتنا معتمدة من الجهات المحلية والدولية
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-go-green-50 py-16 mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            استمتع بتجربة التسوق الأخضر
          </h2>
          <p className="text-gray-600 mb-8">
            انضم لآلاف العملاء الذين اختاروا الحياة الصحية والمستدامة
          </p>
          <button className="px-8 py-3 bg-go-green-700 text-white rounded-lg font-medium hover:bg-go-green-800 transition-colors">
            ابدأ التسوق الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
