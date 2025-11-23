const Privacy = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 1 de Janeiro de 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p>
              A Aquaforte valoriza a privacidade dos seus clientes e compromete-se a proteger
              os dados pessoais que nos são confiados. Esta política descreve como
              recolhemos, utilizamos e protegemos as suas informações pessoais.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Dados Recolhidos</h2>
            <p>Recolhemos os seguintes tipos de informação:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>Morada para prestação de serviços</li>
              <li>Detalhes sobre os serviços solicitados</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Utilização dos Dados</h2>
            <p>Utilizamos os seus dados pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer e gerir os nossos serviços</li>
              <li>Comunicar consigo sobre os serviços solicitados</li>
              <li>Enviar orçamentos e faturas</li>
              <li>Melhorar os nossos serviços</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Partilha de Dados</h2>
            <p>
              Não vendemos, alugamos ou partilhamos os seus dados pessoais com terceiros,
              exceto quando necessário para fornecer os serviços solicitados ou quando
              legalmente obrigados.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger os seus dados contra
              acesso não autorizado, alteração ou destruição.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Os Seus Direitos</h2>
            <p>Tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aceder aos seus dados pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar a eliminação dos seus dados</li>
              <li>Opor-se ao processamento dos seus dados</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contacto</h2>
            <p>
              Para exercer os seus direitos ou para questões sobre esta política, contacte-nos
              através de:
            </p>
            <p>
              Email: privacidade@aquaforte.pt
              <br />
              Telefone: +351 966 931 357
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
