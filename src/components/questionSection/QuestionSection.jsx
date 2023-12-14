import styles from './QuestionSection.module.scss'
import { Button, Input, Title } from "../index";

function QuestionSection() {
  return (
    <div className={styles.questions}>
      <div className={styles.container}>
        <div className={styles.question__card}>
          <div>
            <Title className={styles.question__card__title}>Остались вопросы?</Title>
            <p className={styles.question__card__descr}>
              Оформите заявку на сайте и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          <div>
            <form>
              <div className={styles.form__inputs__wrapper}>
                <Input
                  type="text"
                  name="Имя"
                  placeholder="Имя"
                  classSpan={styles.input__label}
                  classInput={styles.input}
                />
                <Input
                  type="tel"
                  name="Ваш телефон"
                  placeholder="Ваш телефон"
                  classSpan={styles.input__label}
                  classInput={styles.input}
                />
              </div>
              <label className={styles.textArea__label}>
                <span className={styles.input__label}>Ваш вопроc</span>
                <textarea
                  className={styles.textArea}
                  name="question"
                  placeholder="Ваш вопрос"
                  cols="30"
                  rows="4"
                >
          </textarea>
              </label>
              <div className={styles.question__footer}>
                <Button
                  addClass={styles.form_btn}
                  type='submit'
                >Отправить</Button>
                <div className={styles.policy}>
                  <p className={styles.policy__decription}>Нажимая на кнопку, вы соглашаетесь
                                                           с
                  </p>
                  <a
                    className={styles.link}
                    href="#"
                  >Политикой конфиденциальности
                  </a>
                </div>

              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default QuestionSection;