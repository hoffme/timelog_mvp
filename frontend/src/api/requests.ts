interface Props<P> {
    uri: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: P
    query?: { [key:string]: string | number | boolean | undefined }
}

class Requests {

    private static host: string = 'http://localhost:4000';

    public static async fetch<P, R>(props: Props<P>): Promise<R> {
        const url = new URL(`${this.host}${props.uri}`);

        if (props.query) {
            Object.entries(props.query)
                .forEach(([key, value]) => {
                    if (value === undefined) return;
                    url.searchParams.set(key, value.toString());
                })
        }

        const response: any = await fetch(url.href, {
            headers: { 'Content-Type': 'application/json' },
            method: props.method || 'GET',
            body: props.body ? JSON.stringify(props.body) : undefined
        });

        const data = await response.json();

        if (data.error) throw new Error(data.error);

        return data.result;
    }

}

export default Requests;