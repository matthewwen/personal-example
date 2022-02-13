export function Post({item}: any) {
    console.log({item});
    return (
        <div style={{margin: 20}}>
            <div>title: {item.data.title}</div>
            <div>ups: {item.data.ups}</div>
            <div>url: <a href={item.data.url}>{item.data.url}</a></div>
        </div>
    )
}