import {Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HistoryIcon from '@material-ui/icons/History';
import ReceiptIcon from '@material-ui/icons/Receipt';
import * as React from "react";
import {TabType} from "./App";

const useStyles = makeStyles((theme) => ({
    statusBar: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'row-reverse',
        fontFamily: "Roboto",
        fontSize: '9pt',
        padding: '2px',
        alignItems: 'center',
    },
    statusItem: {
        paddingRight: '2px',
    }
}));

type Props = { ledger: string, selectedTab: string, setSelectedTab: (selectedTab: TabType) => void };

export default ({ ledger, selectedTab, setSelectedTab }: Props) => {
    const classes = useStyles();
    return <div className={classes.statusBar}>
        <span className={classes.statusItem} style={{ width: "300px" }}>
            {"Active ledger: " + ledger}
        </span>
        <span className={classes.statusItem} style={{ flex: 1 }}>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={selectedTab}
                defaultValue="results"
                onChange={(e, value) => {
                    setSelectedTab(value);
                }}
            >
                <Tab icon={<ReceiptIcon />} value="results" />
                <Tab icon={<HistoryIcon />} value="history" />
            </Tabs>
        </span>
    </div>;
}