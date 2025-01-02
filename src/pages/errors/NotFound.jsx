import './NotFound.css';
import ButtonDefault from "../../components/button-component/ButtonDefault";

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <svg className='notfound_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="140" height="140">
        <path d="M12 0C5.363281 0 0 5.363281 0 12C0 18.636719 5.363281 24 12 24C18.636719 24 24 18.636719 24 12C24 5.363281 18.636719 0 12 0 Z M 12 2C17.566406 2 22 6.433594 22 12C22 17.566406 17.566406 22 12 22C6.433594 22 2 17.566406 2 12C2 6.433594 6.433594 2 12 2 Z M 8 8C6.894531 8 6 8.894531 6 10C6 11.105469 6.894531 12 8 12C9.105469 12 10 11.105469 10 10C10 8.894531 9.105469 8 8 8 Z M 16 8C14.894531 8 14 8.894531 14 10C14 11.105469 14.894531 12 16 12C17.105469 12 18 11.105469 18 10C18 8.894531 17.105469 8 16 8 Z M 12 14C9.582031 14 7.464844 15.171875 6.1875 17.03125L7.8125 18.15625C8.734375 16.816406 10.21875 16 12 16C13.78125 16 15.265625 16.816406 16.1875 18.15625L17.8125 17.03125C16.535156 15.171875 14.417969 14 12 14Z" fill="#E64D61" />
      </svg>
      <h1 className='notfound_title'>404</h1>
      <p className='notfound_mes'>Page Not Found</p>
      <p className='notfound_text'>La page que vous recherchez n'existe pas.</p>
      <ButtonDefault href="/" label="Retour à l'accueil" boxIconName="bx bx-arrow-back" />
    </div>
  );
}