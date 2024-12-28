import style from "./RegisrationPage.module.css"

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={style.container}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
