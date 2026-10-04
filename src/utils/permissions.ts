import { PermissionsAndroid, Platform } from 'react-native';
import type { BlePermissionOptions } from '../types';

/** Request only the Android BLE permissions needed by the requested role. */
export async function requestBlePermissions(
  options: BlePermissionOptions = {},
): Promise<boolean> {
  if (Platform.OS !== 'android' || Number(Platform.Version) < 23) {
    return true;
  }

  const permissions =
    Number(Platform.Version) >= 31
      ? [
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          ...(options.needsAdvertising
            ? [PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE]
            : []),
        ]
      : [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];

  const results = await PermissionsAndroid.requestMultiple(permissions);
  return permissions.every(
    (permission) => results[permission] === PermissionsAndroid.RESULTS.GRANTED,
  );
}
