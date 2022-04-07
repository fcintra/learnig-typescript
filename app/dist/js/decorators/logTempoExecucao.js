export function logTempoExecucao() {
    return function (target, propertykey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = () => {
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`Tempo de execução do método adiciona: ${(t2 - t1) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
