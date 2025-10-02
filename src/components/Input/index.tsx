import styles from "./styles.module.css"

// O comando React.ComponentProps<> disponibiliza todas as propriedades da tag em questão
// Não precisaria adicionar cadas caracteristica no type Props
type Props = React.ComponentProps<"input">;

export function Input({ ...rest }: Props) {
    return(
        <input type="text" className={styles.input} {...rest} />
    )
}