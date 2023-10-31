import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { setContainerWidth } from '../../Utils/Helpers/Helpers';
import ICONS from '../Icons';
import { useNavigation } from '@react-navigation/native';
import { Constants } from '../../Utils';

const AllRoutesCard = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(Constants.SCREEN_NAME.RouteDetails)}>
            <View style={styles.containerStyle} >
                {/* Row 1 */}
                <View style={styles.row_1} >
                    <Text style={styles.routeName} >
                        Route Name
                    </Text>
                    <View style={styles.statusZoneContainer} >
                        <View style={[styles.statusContainer, { backgroundColor: "#0094FF" }]} >
                            <Text style={styles.statusTxt} >
                                Ready
                            </Text>
                        </View>
                        <Text style={styles.borroughTxt} >
                            Borough/Zone
                        </Text>
                    </View>
                    <Text style={styles.time} >
                        08-09-2023 11:35 PM
                    </Text>
                </View>

                {/* Row 2 */}
                <View style={styles.row_2} >
                    <Text style={styles.coPay} >
                        COPAY'S
                        <Text style={{ color: "#169E3A" }} >
                            {" $189.90"}
                        </Text>
                    </Text>
                    <Text style={styles.stops} >
                        35 Stops    15 Miles
                    </Text>
                    <Text style={styles.stops} >
                        ETC    4 Hours 20 Minutes
                    </Text>
                </View>

                {/* Row 3 */}
                <View style={styles.row_3} >
                    <Text style={[styles.coPay, styles.paidTo, { paddingLeft: 5 }]} >
                        Paid to Pharmacy $0.00
                    </Text>
                    <Text style={[styles.coPay, styles.collected]} >
                        Collected 0.00
                    </Text>
                </View>

                {/* Row 4 */}
                <View style={styles.row_4}>
                    <Text style={styles.stops} >
                        Driver name
                    </Text>
                    <Text style={styles.readyToStart} >
                        Ready To Start
                    </Text>
                </View>

                {/* Row 5 */}
                <View style={styles.row_5}>
                    <View style={styles.row_5_leftContainer} >
                        <View style={styles.numberIconContainer} >
                            <ICONS.CheckedIcon />
                            <Text style={styles.numberIcon} >70</Text>
                        </View>
                        <View style={styles.numberIconContainer} >
                            <ICONS.CrossIcon />
                            <Text style={styles.numberIcon} >10</Text>
                        </View>
                        <View style={styles.numberIconContainer} >
                            <ICONS.WarningIcon />
                            <Text style={styles.numberIcon} >20</Text>
                        </View>
                    </View>
                    <View style={styles.row_5_rightContainer} >
                        <Text style={[styles.commonColorStyle,
                        styles["green"],
                        { width: setContainerWidth(70) }
                        ]}>
                            {"70" + "%"}
                        </Text>
                        <Text style={[styles.commonColorStyle,
                        styles["red"], {
                            width: setContainerWidth(20)
                        }]}
                        >
                            {"20" + "%"}
                        </Text>
                        <Text style={[styles.commonColorStyle,
                        styles["orange"],
                        {
                            width: setContainerWidth(10)
                        }]}>
                            {"10" + "%"}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AllRoutesCard;