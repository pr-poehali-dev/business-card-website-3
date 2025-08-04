import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-purple-500/20 animate-float"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="/img/c2a49d64-b6ec-43d6-a7f9-6e3000bdf741.jpg"
                alt="Профиль"
                className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-white/80"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent mb-4">
              Добро пожаловать
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Современный профессионал с яркими идеями и креативным подходом к решению задач
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-4 animate-slide-up">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 animate-slide-up">
                <Icon name="Download" size={20} className="mr-2" />
                Резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Обо мне
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Творческий подход к каждому проекту
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Профессионал с многолетним опытом работы в сфере креативных решений. 
                  Специализируюсь на создании уникальных проектов, которые сочетают в себе 
                  современные технологии и творческий подход.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Верю в силу инноваций и постоянно изучаю новые тренды в индустрии. 
                  Мой подход основан на глубоком понимании потребностей клиентов и 
                  стремлении превзойти их ожидания.
                </p>

                <div className="flex gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">100+</div>
                    <div className="text-sm text-gray-600">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Клиентов</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 animate-slide-up">
                {[
                  { skill: "Креативное мышление", level: 95 },
                  { skill: "Управление проектами", level: 90 },
                  { skill: "Командная работа", level: 88 },
                  { skill: "Инновационные решения", level: 92 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Контакты
            </h2>
            
            <p className="text-xl text-gray-600 mb-12">
              Готов обсудить ваши идеи и воплотить их в жизнь
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">hello@example.com</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Локация</h3>
                  <p className="text-gray-600">Москва, Россия</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать сообщение
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
                Назначить встречу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: "Github", href: "#" },
              { icon: "Linkedin", href: "#" },
              { icon: "Twitter", href: "#" },
              { icon: "Instagram", href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Icon name={social.icon as any} size={20} className="text-white" />
              </a>
            ))}
          </div>
          
          <p className="text-gray-400">
            © 2024 Современная визитка. Создано с любовью и вниманием к деталям.
          </p>
        </div>
      </footer>
    </div>
  );
}