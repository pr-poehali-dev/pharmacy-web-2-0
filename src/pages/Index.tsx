import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuCategories = [
    {
      name: 'Лекарства',
      subcategories: [
        { name: 'Аллергия', link: '#' },
        { name: 'Инфекционные и вирусные заболевания', link: '#' },
        { name: 'Противовоспалительные и обезболивающие средства', link: '#' },
        { name: 'Заболевания крови', link: '#' },
        { name: 'Мочеполовая система и почки', link: '#' },
        { name: 'Онкологические заболевания', link: '#' },
        { name: 'Венотоники', link: '#' },
        { name: 'Противопаразитарные средства', link: '#' },
        { name: 'Обмен веществ', link: '#' },
      ]
    },
    { name: 'Болезни', subcategories: [] },
    { name: 'Витамины и БАДы', subcategories: [] },
    { name: 'Косметика', subcategories: [] },
    { name: 'Дермакосметика', subcategories: [] },
    { name: 'Гигиена', subcategories: [] },
    { name: 'Медицинские изделия и приборы', subcategories: [] },
    { name: 'Мама и малыш', subcategories: [] },
    { name: 'Диетическое питание', subcategories: [] },
    { name: 'Уход за больными', subcategories: [] },
    { name: 'Ортопедия', subcategories: [] },
    { name: 'Аптечки', subcategories: [] },
  ];

  const featuredProducts = [
    { id: 1, name: 'Bioderma Sensibio Вода мицеллярная', price: 2024, oldPrice: null, badge: '🔥 Хит продаж', country: 'Франция', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/6d8c54c2-5704-4720-8ab8-05721f204ea2.jpg' },
    { id: 2, name: 'Oraxz Ocean Хрона Пиколинат 200 мкг', price: 2500, oldPrice: null, badge: null, country: 'Турция', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/12f03009-ae74-4a88-b784-eddf0e3e1461.jpg' },
    { id: 3, name: 'Aktra Таблетки покрытые оболочкой', price: 4924, oldPrice: null, badge: null, country: 'США', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/12f03009-ae74-4a88-b784-eddf0e3e1461.jpg' },
    { id: 4, name: 'Витамин С Эвалар Таблетки шипучие', price: 655, oldPrice: null, badge: '⚡ -30%', country: 'Россия', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/c28f37fc-b40a-47eb-813f-5a675c92c66e.jpg' },
    { id: 5, name: 'Кальцемин Адванс таблетки покрытые', price: 2254, oldPrice: null, badge: '🔥 Популярно', country: 'США', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/12f03009-ae74-4a88-b784-eddf0e3e1461.jpg' },
    { id: 6, name: 'Грамицидин с анестетиком Спрей', price: 867, oldPrice: null, badge: null, country: 'Россия', image: 'https://cdn.poehali.dev/projects/21a9b731-8646-4a8d-adfc-11ba53c4f4ed/files/12f03009-ae74-4a88-b784-eddf0e3e1461.jpg' },
  ];

  const promoSlides = [
    { title: 'Выгода в наборе', subtitle: 'Экономьте до 30% покупая наборы', color: 'from-cyan-500 to-blue-500' },
    { title: 'Скидки до 20%', subtitle: 'На популярные товары месяца', color: 'from-purple-500 to-pink-500' },
    { title: 'Новинки недели', subtitle: 'Современные препараты для вашего здоровья', color: 'from-emerald-500 to-teal-500' },
  ];

  const articles = [
    { title: 'Слушая свое сердце', image: '❤️', category: 'Здоровье' },
    { title: 'Время хорошего настроения', image: '☀️', category: 'Образ жизни' },
    { title: 'Эпигенетика простыми словами', image: '🧬', category: 'Наука' },
    { title: 'Не просто витамины', image: '💊', category: 'Витамины' },
  ];

  const manufacturers = [
    { name: 'A.Vogel', logo: '🌿' },
    { name: 'Ducray', logo: '💙' },
    { name: 'Vitality', logo: '⚡' },
    { name: 'Evalar', logo: '🍀' },
    { name: 'Provital', logo: '💚' },
    { name: 'Nutricia', logo: '🧡' },
  ];

  const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ'.split('');

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Спасибо за подписку! Письмо отправлено на ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-cyan-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button className="web2-button glossy h-12 px-4 rounded-xl flex items-center gap-2 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                    <span className="text-2xl">🏥</span>
                    Аптечка
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="text-left text-cyan-600 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full gradient-web2 flex items-center justify-center text-white font-bold glossy">
                        36.6
                      </div>
                      Меню
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-1">
                    <div className="bg-cyan-600 text-white px-4 py-3 rounded-lg font-semibold mb-2">
                      Выгодно 💰
                    </div>
                    {menuCategories.map((category, idx) => (
                      <div key={idx}>
                        <div className={`px-4 py-3 font-medium rounded-lg cursor-pointer transition-colors ${
                          category.name === 'Лекарства' 
                            ? 'bg-cyan-500 text-white' 
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}>
                          {category.name}
                        </div>
                        {category.name === 'Лекарства' && category.subcategories.length > 0 && (
                          <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-3">
                            {category.subcategories.map((sub, subIdx) => (
                              <a
                                key={subIdx}
                                href={sub.link}
                                className="block py-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-12 h-12 rounded-full gradient-web2 flex items-center justify-center text-white font-bold text-xl glossy shadow-lg">
                36.6
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Интернет Аптека
                </h1>
                <p className="text-xs text-gray-600">Круглосуточно</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center gap-1">
                <Icon name="Phone" size={16} />
                8 495 797 6 336
              </a>
              <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">Скидки</a>
              <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">Акции</a>
              <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">Вакансии</a>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="MapPin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 gradient-pink">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <div className="flex-1 relative">
              <Input 
                placeholder="Поиск по лекарствам, болезням, веществу" 
                className="pl-10 h-12 border-2 border-cyan-200 focus:border-cyan-400 rounded-full"
              />
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <Button className="web2-button glossy h-12 px-8 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Найти
            </Button>
          </div>

          <div className="mt-3 flex gap-3 text-sm overflow-x-auto pb-2">
            <Badge variant="outline" className="whitespace-nowrap">Бросить курить</Badge>
            <Badge variant="outline" className="whitespace-nowrap">От простуды и гриппа</Badge>
            <Badge variant="outline" className="whitespace-nowrap">Слабительное</Badge>
            <Badge variant="outline" className="whitespace-nowrap">Лечение кашля</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {promoSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className={`h-80 rounded-3xl bg-gradient-to-r ${slide.color} p-12 flex items-center justify-between text-white shadow-2xl overflow-hidden relative glossy`}>
                    <div className="z-10 max-w-xl">
                      <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
                      <p className="text-xl mb-6 drop-shadow">{slide.subtitle}</p>
                      <Button size="lg" className="web2-button text-white font-semibold px-8 py-6 text-lg rounded-full">
                        Перейти к наборам
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                    <div className="text-9xl opacity-20 absolute right-10">💊</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">По полочкам</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Хиты продаж</Button>
              <Button variant="ghost" size="sm">Популярные товары</Button>
              <Button variant="ghost" size="sm">Выгодные предложения</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="web2-card p-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                {product.badge && (
                  <Badge className="mb-2 gradient-pink">{product.badge}</Badge>
                )}
                <div className="h-32 flex items-center justify-center my-4 group-hover:scale-110 transition-transform">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.country}</p>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-cyan-600">{product.price} ₽</span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">{product.oldPrice} ₽</span>
                    )}
                  </div>
                </div>
                <Button 
                  onClick={addToCart}
                  className="w-full web2-button text-white font-semibold rounded-full"
                >
                  Купить
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="gradient-web2 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden glossy">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Подпишитесь и получайте первыми лучшие предложения!
            </h2>
            <p className="text-lg mb-6 drop-shadow">
              Акции, новинки и спецпредложения. Прямо на вашу почту.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш E-mail" 
                className="flex-1 h-14 bg-white text-gray-800 border-0 rounded-full px-6"
              />
              <Button type="submit" size="lg" className="gradient-pink text-white font-semibold px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
                Подписаться
              </Button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur">
                <Icon name="Share2" size={20} />
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 text-[300px] opacity-10">✉️</div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Полезные статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="web2-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="h-48 gradient-web2 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {article.image}
                </div>
                <div className="p-4">
                  <Badge className="mb-2">{article.category}</Badge>
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Производители</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {manufacturers.map((brand, index) => (
              <Card key={index} className="web2-card p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer hover:scale-105">
                <div className="text-5xl mb-2">{brand.logo}</div>
                <p className="text-sm font-medium text-gray-700">{brand.name}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Препараты по алфавиту</h2>
          <div className="web2-card p-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {alphabet.map((letter) => (
                <Button 
                  key={letter} 
                  variant="outline" 
                  size="sm"
                  className="w-12 h-12 rounded-full hover:web2-button hover:text-white hover:border-transparent transition-all"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Помощь</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Как сделать заказ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Где получить заказ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Вопрос ответ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Сервис</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Политика рекомендаций</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Партнёры</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">О компании</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Контактные данные</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Производители</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Мобильное приложение</h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Icon name="Apple" size={24} />
                    <span className="text-sm">App Store</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Icon name="Play" size={24} />
                    <span className="text-sm">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Интернет Аптека 36.6. Все права защищены.</p>
            <p className="mt-2">Интернет-аптека работает круглосуточно. Доставка лекарств по Москве и России.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}