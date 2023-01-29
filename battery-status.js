// IN: our script reads the battery status data in %
// FACT: the factory settings idicate how long does a % left
// OUT: calculate how many minutes our device has left

// variables - camelCase

baterryCharge = 70 // %

FULL_BATTERY = 100 // %  - fully charged battery
chargePercentInMinutes = 10 // 1% - 10 minutes

etWorkInMinutes  =  baterryCharge * chargePercentInMinutes




