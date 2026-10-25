import { legal } from '../legal.js'

// Política de privacidade em português (tradução do texto em espanhol).

export const title = 'Política de privacidade'
export const updatedLabel = 'Última atualização'

export const sections = [
  { id: 'responsable', title: 'Responsável' },
  { id: 'datos', title: 'Informações que coletamos' },
  { id: 'permisos', title: 'Permissões do aparelho' },
  { id: 'uso', title: 'Como usamos as informações' },
  { id: 'terceros', title: 'Com quem compartilhamos' },
  { id: 'seguridad', title: 'Armazenamento e segurança' },
  { id: 'conservacion', title: 'Retenção' },
  { id: 'eliminar-cuenta', title: 'Excluir sua conta e seus dados' },
  { id: 'derechos', title: 'Seus direitos' },
  { id: 'menores', title: 'Menores de idade' },
  { id: 'cambios', title: 'Alterações nesta política' },
  { id: 'contacto', title: 'Contato' },
]

function Mail() {
  return <a href={`mailto:${legal.email}`}>{legal.email}</a>
}

export function Body() {
  return (
    <>
      <p className="legal-intro">
        Esta política explica quais informações o aplicativo móvel HerDex («o app») coleta, para que as usa, com quem
        as compartilha e como você pode excluí-las. Ao usar o app, você aceita as práticas descritas aqui.
      </p>

      <section id="responsable">
        <h2>1. Responsável</h2>
        <p>
          O HerDex é desenvolvido e publicado por <strong>{legal.developer}</strong> ({legal.country}), responsável pelo
          tratamento dos dados descritos nesta política. Você pode nos escrever em <Mail />.
        </p>
      </section>

      <section id="datos">
        <h2>2. Informações que coletamos</h2>
        <h3>Dados da conta</h3>
        <p>
          Você pode usar o app sem conta para uma pesagem de teste. Para continuar usando e fazer backup dos seus dados,
          pedimos que crie uma conta com seu <strong>e-mail</strong> e uma <strong>senha</strong>. A senha é gerenciada
          pelo nosso provedor de autenticação e armazenada criptografada; nós não podemos vê-la.
        </p>
        <h3>Registros de pesagem</h3>
        <p>Cada vez que você estima o peso de um animal, o app gera um registro com:</p>
        <ul>
          <li>A fotografia do animal que você tirou ou escolheu da galeria.</li>
          <li>Nome ou identificação do animal, lote e notas, se você decidir escrevê-los.</li>
          <li>
            Resultados da análise: raça, condição corporal, medidas estimadas (perímetro torácico, comprimento corporal,
            altura da cernelha), peso estimado, método de cálculo e nível de confiança.
          </li>
          <li>Data e hora do registro.</li>
        </ul>
        <p>
          Se você escolher uma imagem da galeria, o arquivo pode conter metadados adicionados pela câmera (por exemplo,
          data ou localização). O HerDex não lê nem usa esses metadados, mas o arquivo é transmitido como está.
        </p>
        <h3>Dados salvos só no seu aparelho</h3>
        <p>
          O app guarda no seu celular uma cópia dos seus registros para funcionar sem conexão, o número de pesagens de
          teste feitas sem conta e suas preferências de uso.
        </p>
        <h3>O que não coletamos</h3>
        <p>
          O HerDex não acessa sua localização, contatos, microfone nem identificadores de publicidade, e não inclui
          ferramentas de publicidade nem de rastreamento de terceiros.
        </p>
      </section>

      <section id="permisos">
        <h2>3. Permissões do aparelho</h2>
        <ul>
          <li>
            <strong>Câmera:</strong> para fotografar o animal. Só é usada enquanto você está na tela de captura.
          </li>
          <li>
            <strong>Fotos ou galeria:</strong> para você escolher uma imagem existente. Só é lida a imagem que você
            seleciona.
          </li>
          <li>
            <strong>Sensor de movimento (acelerômetro):</strong> para indicar se o celular está estável ao tirar a foto.
            Esses dados são processados na hora e não são salvos nem enviados.
          </li>
          <li>
            <strong>Notificações:</strong> se você ativar os lembretes de repesagem. São agendados no próprio celular.
          </li>
          <li>
            <strong>Internet:</strong> para analisar fotos e sincronizar seus registros.
          </li>
        </ul>
      </section>

      <section id="uso">
        <h2>4. Como usamos as informações</h2>
        <ul>
          <li>Analisar a fotografia e estimar as medidas e o peso do animal.</li>
          <li>Guardar seu histórico de pesagens e sincronizá-lo entre seus aparelhos.</li>
          <li>Criar e gerenciar sua conta e iniciar sessão.</li>
          <li>Responder às suas dúvidas e solicitações.</li>
          <li>Detectar e corrigir erros do app.</li>
        </ul>
        <p>Não vendemos suas informações nem as usamos para publicidade.</p>
      </section>

      <section id="terceros">
        <h2>5. Com quem compartilhamos</h2>
        <p>Só compartilhamos informações com os provedores necessários para o app funcionar:</p>
        <ul>
          <li>
            <strong>Google (API do Gemini):</strong> recebe a fotografia do animal para analisá-la e devolver as medidas
            estimadas. Não enviamos seu e-mail nem outros dados da conta. O Google trata esses dados conforme os{' '}
            <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noreferrer">
              termos da API do Gemini
            </a>{' '}
            e sua{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              política de privacidade
            </a>
            .
          </li>
          <li>
            <strong>Supabase:</strong> hospeda as contas de usuário, os registros de pesagem e as fotografias com backup.
            Consulte sua{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
              política de privacidade
            </a>
            .
          </li>
        </ul>
        <p>
          Além disso, podemos divulgar informações se a lei exigir ou para proteger os direitos e a segurança dos usuários.
        </p>
      </section>

      <section id="seguridad">
        <h2>6. Armazenamento e segurança</h2>
        <p>
          Todas as informações são transmitidas criptografadas por HTTPS. Os registros ficam no seu aparelho e, se você
          tiver uma conta, nos servidores do Supabase, onde cada usuário só pode acessar os próprios dados. Aplicamos
          medidas razoáveis para proteger seus dados, mas nenhum sistema é totalmente seguro.
        </p>
      </section>

      <section id="conservacion">
        <h2>7. Retenção</h2>
        <p>
          Guardamos sua conta e seus registros enquanto a conta estiver ativa. Se você excluir um registro no app, ele
          também é apagado dos nossos servidores na próxima sincronização. Se você excluir sua conta, apagamos seus dados
          como indicado na seção seguinte. Os dados salvos só no celular são apagados ao desinstalar o app.
        </p>
      </section>

      <section id="eliminar-cuenta">
        <h2>8. Excluir sua conta e seus dados</h2>
        <p>Você pode excluir sua conta do HerDex e todos os dados associados a qualquer momento:</p>
        <ul>
          <li>
            <strong>Pelo app, na hora:</strong> Perfil → Excluir conta. Os passos estão em{' '}
            <a href="/eliminar-cuenta.html">herdex.app/eliminar-cuenta</a>.
          </li>
          <li>
            <strong>Sem o app:</strong> siga estes passos.
          </li>
        </ul>
        <ol>
          <li>
            Escreva para <Mail /> a partir do e-mail com que criou a conta, com o assunto «Excluir minha conta do HerDex».
          </li>
          <li>Verificaremos que a solicitação vem do titular da conta.</li>
          <li>Confirmaremos a exclusão em até 30 dias.</li>
        </ol>
        <p>
          São apagados de forma permanente: seu e-mail e credenciais de acesso, todos os seus registros de pesagem, as
          fotografias com backup, seus lotes e suas preferências. Não guardamos cópias, salvo se a lei nos obrigar a
          manter algum dado por um período determinado.
        </p>
        <p>Se quiser apagar só alguns registros, pode fazer isso pelo histórico do app sem excluir sua conta.</p>
      </section>

      <section id="derechos">
        <h2>9. Seus direitos</h2>
        <p>
          Conforme a legislação aplicável, você pode solicitar acesso, correção, exclusão ou uma cópia dos seus dados, e
          se opor ao tratamento. Escreva para <Mail /> e responderemos em até 30 dias.
        </p>
      </section>

      <section id="menores">
        <h2>10. Menores de idade</h2>
        <p>
          O HerDex é voltado a produtores e profissionais do setor pecuário e não se destina a menores de 13 anos. Não
          coletamos conscientemente dados de menores. Se você acredita que um menor nos forneceu informações, entre em
          contato para que as apaguemos.
        </p>
      </section>

      <section id="cambios">
        <h2>11. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política quando o app ou a lei mudarem. Publicaremos a nova versão nesta página com a
          data de atualização e, se as mudanças forem importantes, avisaremos dentro do app.
        </p>
      </section>

      <section id="contacto">
        <h2>12. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta política ou sobre seus dados, escreva para <Mail />.
        </p>
      </section>
    </>
  )
}
