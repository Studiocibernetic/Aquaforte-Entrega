const Terms = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: 1 de Janeiro de 2025
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar os serviços da Aquaforte, concorda com estes termos de uso. Se não
              concordar com algum aspeto destes termos, não utilize os nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Serviços Oferecidos</h2>
            <p>
              A Aquaforte oferece serviços profissionais de canalização, incluindo mas não
              limitados a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deteção e reparação de fugas</li>
              <li>Desentupimentos</li>
              <li>Remodelação de casas de banho</li>
              <li>Instalação e reparação de sistemas de canalização</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Orçamentos e Pagamentos</h2>
            <p>
              Todos os orçamentos são gratuitos e sem compromisso. Os preços finais serão
              confirmados antes do início dos trabalhos. O pagamento deve ser efetuado após a
              conclusão satisfatória do serviço, exceto se acordado de outra forma.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Garantias</h2>
            <p>
              Todos os nossos serviços incluem garantia de qualidade. Os detalhes específicos
              da garantia serão fornecidos com cada serviço realizado.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Responsabilidade</h2>
            <p>
              A Aquaforte compromete-se a realizar todos os serviços com profissionalismo e
              de acordo com as melhores práticas da indústria. Não nos responsabilizamos por
              problemas pré-existentes não identificados durante a inspeção inicial.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Cancelamentos</h2>
            <p>
              Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência.
              Cancelamentos de última hora podem estar sujeitos a taxas de cancelamento.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Alterações aos Termos</h2>
            <p>
              Reservamo-nos o direito de alterar estes termos a qualquer momento. As
              alterações entrarão em vigor imediatamente após a sua publicação neste website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contacto</h2>
            <p>
              Para questões sobre estes termos, contacte-nos através de:
            </p>
            <p>
              Email: geral@aquaforte.pt
              <br />
              Telefone: +351 966 931 357
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
