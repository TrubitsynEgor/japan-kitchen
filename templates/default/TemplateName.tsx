import styles from './TemplateName.module.scss';

interface TemplateNameProps {
  className?: string
}

export const TemplateName = ({ className }: TemplateNameProps) => {

  return (
    <div className={`${styles.templateName} + ${className}`}>

    </div>
  )
};
