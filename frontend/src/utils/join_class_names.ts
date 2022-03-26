const jcn = (classes: (string | undefined | null)[]): string => {
    return classes.filter(className => !!className).join(' ');
}

export default jcn;