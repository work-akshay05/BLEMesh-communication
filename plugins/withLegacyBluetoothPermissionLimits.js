const { withAndroidManifest } = require('@expo/config-plugins');

const LEGACY_PERMISSIONS = new Set([
  'android.permission.BLUETOOTH',
  'android.permission.BLUETOOTH_ADMIN',
]);

module.exports = function withLegacyBluetoothPermissionLimits(config) {
  return withAndroidManifest(config, (modConfig) => {
    const entries = [
      ...(modConfig.modResults.manifest['uses-permission'] ?? []),
      ...(modConfig.modResults.manifest['uses-permission-sdk-23'] ?? []),
    ];

    for (const permission of entries) {
      if (LEGACY_PERMISSIONS.has(permission.$['android:name'])) {
        permission.$['android:maxSdkVersion'] = '30';
      }
    }

    return modConfig;
  });
};
