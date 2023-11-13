import './NavBar.css'

export const NavBar = () => {
    const logoName = 'Fasil K'

    return (<>
            <section className={'navbar-mobile'}>
                <p className="logo-mobile">{logoName}</p>
                <div className="magic-stick-mobile"></div>
            </section>
            <section className={'navbar'}>
                <span className={'navbar__logo'}>{logoName}</span>
                <div className={'navbar__links'}>
                    <a href={'#home'}>home</a>
                    <a href={'#projects'}>projects</a>
                    <a href={'#skills'}>skills</a>
                    <a href={'#contact'}>contact</a>
                </div>
            </section>
            <div className={'navbar-break'}/>
        </>);
};