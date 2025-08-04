import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-gray-600/10 animate-float"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="/img/d5c3a3d0-f77c-484d-8edf-aa0ec0b20cda.jpg"
                alt="Александр Шиндряев - Мастер подземелий"
                className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-primary/20"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-gray-800 to-black bg-clip-text text-transparent mb-4">
              Александр Шиндряев
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Мастер подземелий • Творческая личность • Создатель миров
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-gray-800 bg-clip-text text-transparent">
              Обо мне
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="mb-6">
                  <img 
                    src="/img/bd68c979-4af4-4eb1-bad0-345fc65a7d13.jpg"
                    alt="D&D игровая атмосфера"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Создатель миров и историй
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Уже много лет веду игры в Dungeons & Dragons, создавая незабываемые 
                  приключения для игроков. Как творческая личность, пишу книги и стихи, 
                  а также разработал собственный сеттинг для D&D 5e 2014.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Ищу единомышленников — таких же творческих личностей с похожими интересами. 
                  Уверен, что в моем мире D&D найдется местечко для каждого, кто готов 
                  окунуться в мир фантазий и приключений.
                </p>

                <div className="flex gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-gray-600">Лет в D&D</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">1</div>
                    <div className="text-sm text-gray-600">Свой сеттинг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">∞</div>
                    <div className="text-sm text-gray-600">Историй</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 animate-slide-up">
                <div className="mb-6">
                  <img 
                    src="/img/45e4c1ec-4847-4d33-a411-42e20dbcd838.jpg"
                    alt="Магическая библиотека творчества"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                {[
                  { skill: "Мастерство D&D", level: 98 },
                  { skill: "Создание сеттингов", level: 95 },
                  { skill: "Писательство", level: 90 },
                  { skill: "Творческое мышление", level: 96 }
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
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-gray-600/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-gray-800 bg-clip-text text-transparent">
              Контакты
            </h2>
            
            <p className="text-xl text-gray-600 mb-12">
              Присоединяйся к миру приключений и творчества
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Telegram</h3>
                  <p className="text-gray-600">@Dark_FENFiR</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Специализация</h3>
                  <p className="text-gray-600">D&D 5e Мастер</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="text-center p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Сеттинг</h3>
                  <p className="text-gray-600">Авторский мир</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
Присоединиться к игре
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
Узнать о сеттинге
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
            © 2024 Мир приключений ждет тебя. Создано с магией и вдохновением.
          </p>
        </div>
      </footer>
    </div>
  );
}