import { iniciarMenu } from "../components/menu.js";

/**carrega HTML via fetch e injeta no container  */

const carregarComponente = async (caminho, container) =>{
    try{
        const resposta = await fetch (caminho);


        /**valida resposta */
        if (!resposta.ok) {

        }
        /**converte para texto */

        const html = await resposta.text();

        /**injeta no DOM */
        container.innerHTML = html;

    } catch (erro) {
    }

}
/**
 * Controla navegação Spa
 */


const iniciarLinks = () => {

    const conteudo = document.querySelector('[data-conteudo]');
    
    document.querySelectorAll ('[data-link]').forEach((link) => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            const pagina = link.dataset.link;

            /** fecha o menu ao clicar */

            const menu = document.querySelector('[]data-menu');
            const botao = menu.querySelector('.menu__botao');

            if (menu.classList.contains('active')) {
                menu.classList.remove('active');

                botao.setAttribute('aria-expanded', false);
                botao.setAttribute('aria-label', 'Abrir Menu');
            }

            await carregarComponente(`./pages/${pagina}.html`, conteudo);
        });
        
    });
};
/**
 * Inicialização geral da aplicação
 */



const iniciarApp = async () => {
    const containerMenu = document.querySelector('[data-componente="menu"]')

    await carregarComponente('./components/menu.html', containerMenu)
};

iniciarApp();
iniciarLinks();

const conteudo = document.querySelector('[data-conteudo]');
await carregarComponente('./pages/home.html', conteudo)