import MainNvaigation from './MainNvaigation';
import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNvaigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;