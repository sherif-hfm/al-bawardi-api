const umAlQuraDatesInfo = [
    { year: 1318, gregorianStart: "1900-04-30", months: [29, 30, 29, 30, 29, 30, 30, 30, 29, 30, 29, 29] },
    { year: 1319, gregorianStart: "1901-04-19", months: [30, 29, 29, 30, 29, 30, 30, 30, 29, 30, 30, 29] },
    { year: 1320, gregorianStart: "1902-04-09", months: [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 30] },
    { year: 1321, gregorianStart: "1903-03-30", months: [29, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30] },
    { year: 1322, gregorianStart: "1904-03-18", months: [29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1323, gregorianStart: "1905-03-07", months: [29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1324, gregorianStart: "1906-02-24", months: [29, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1325, gregorianStart: "1907-02-13", months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1326, gregorianStart: "1908-02-03", months: [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30] },
    { year: 1327, gregorianStart: "1909-01-23", months: [29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30] },
    { year: 1328, gregorianStart: "1910-01-12", months: [30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1329, gregorianStart: "1911-01-01", months: [30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1330, gregorianStart: "1911-12-21", months: [30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1331, gregorianStart: "1912-12-09", months: [30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1332, gregorianStart: "1913-11-29", months: [29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1333, gregorianStart: "1914-11-18", months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1334, gregorianStart: "1915-11-08", months: [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
    { year: 1335, gregorianStart: "1916-10-27", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1336, gregorianStart: "1917-10-17", months: [29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30] },
    { year: 1337, gregorianStart: "1918-10-06", months: [29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1338, gregorianStart: "1919-09-25", months: [29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1339, gregorianStart: "1920-09-13", months: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1340, gregorianStart: "1921-09-03", months: [29, 29, 30, 30, 29, 30, 30, 30, 29, 30, 29, 29] },
    { year: 1341, gregorianStart: "1922-08-23", months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1342, gregorianStart: "1923-08-13", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
    { year: 1343, gregorianStart: "1924-08-01", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1344, gregorianStart: "1925-07-21", months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1345, gregorianStart: "1926-07-10", months: [30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1346, gregorianStart: "1927-06-30", months: [29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1347, gregorianStart: "1928-06-18", months: [30, 29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1348, gregorianStart: "1929-06-08", months: [29, 30, 29, 29, 30, 30, 29, 30, 30, 30, 29, 30] },
    { year: 1349, gregorianStart: "1930-05-29", months: [29, 29, 30, 29, 29, 30, 30, 29, 30, 30, 30, 29] },
    { year: 1350, gregorianStart: "1931-05-18", months: [30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29] },
    { year: 1351, gregorianStart: "1932-05-06", months: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 30, 29] },
    { year: 1352, gregorianStart: "1933-04-25", months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1353, gregorianStart: "1934-04-14", months: [30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1354, gregorianStart: "1935-04-04", months: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30] },
    { year: 1355, gregorianStart: "1936-03-24", months: [29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1356, gregorianStart: "1937-03-13", months: [30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30, 30] },
    { year: 1357, gregorianStart: "1938-03-03", months: [29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30] },
    { year: 1358, gregorianStart: "1939-02-20", months: [30, 29, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30] },
    { year: 1359, gregorianStart: "1940-02-09", months: [30, 29, 30, 30, 29, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1360, gregorianStart: "1941-01-28", months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1361, gregorianStart: "1942-01-17", months: [30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1362, gregorianStart: "1943-01-07", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30] },
    { year: 1363, gregorianStart: "1943-12-28", months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1364, gregorianStart: "1944-12-16", months: [30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1365, gregorianStart: "1945-12-05", months: [30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1366, gregorianStart: "1946-11-24", months: [30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 29] },
    { year: 1367, gregorianStart: "1947-11-13", months: [30, 30, 30, 29, 30, 30, 29, 29, 30, 29, 29, 30] },
    { year: 1368, gregorianStart: "1948-11-02", months: [29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1369, gregorianStart: "1949-10-22", months: [30, 29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1370, gregorianStart: "1950-10-12", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30] },
    { year: 1371, gregorianStart: "1951-10-02", months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1372, gregorianStart: "1952-09-20", months: [29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1373, gregorianStart: "1953-09-09", months: [30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30] },
    { year: 1374, gregorianStart: "1954-08-29", months: [30, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29] },
    { year: 1375, gregorianStart: "1955-08-18", months: [30, 29, 30, 30, 30, 29, 30, 30, 29, 29, 30, 29] },
    { year: 1376, gregorianStart: "1956-08-07", months: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30] },
    { year: 1377, gregorianStart: "1957-07-28", months: [29, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30, 29] },
    { year: 1378, gregorianStart: "1958-07-17", months: [30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30] },
    { year: 1379, gregorianStart: "1959-07-07", months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1380, gregorianStart: "1960-06-25", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1381, gregorianStart: "1961-06-14", months: [29, 30, 30, 29, 30, 29, 30, 30, 29, 29, 30, 29] },
    { year: 1382, gregorianStart: "1962-06-03", months: [29, 30, 30, 29, 30, 30, 29, 30, 30, 29, 29, 30] },
    { year: 1383, gregorianStart: "1963-05-24", months: [29, 29, 30, 29, 30, 30, 30, 29, 30, 30, 29, 29] },
    { year: 1384, gregorianStart: "1964-05-12", months: [30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 30, 29] },
    { year: 1385, gregorianStart: "1965-05-02", months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30, 29] },
    { year: 1386, gregorianStart: "1966-04-21", months: [30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29] },
    { year: 1387, gregorianStart: "1967-04-10", months: [30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1388, gregorianStart: "1968-03-29", months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1389, gregorianStart: "1969-03-19", months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1390, gregorianStart: "1970-03-08", months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30] },
    { year: 1391, gregorianStart: "1971-02-26", months: [29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30, 30] },
    { year: 1392, gregorianStart: "1972-02-16", months: [29, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30] },
    { year: 1393, gregorianStart: "1973-02-04", months: [30, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1394, gregorianStart: "1974-01-24", months: [30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1395, gregorianStart: "1975-01-13", months: [30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1396, gregorianStart: "1976-01-02", months: [30, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1397, gregorianStart: "1976-12-22", months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1398, gregorianStart: "1977-12-11", months: [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30] },
    { year: 1399, gregorianStart: "1978-12-01", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
    { year: 1400, gregorianStart: "1979-11-20", months: [30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29] },
    { year: 1401, gregorianStart: "1980-11-08", months: [30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1402, gregorianStart: "1981-10-28", months: [30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1403, gregorianStart: "1982-10-18", months: [29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1404, gregorianStart: "1983-10-07", months: [29, 30, 30, 29, 30, 30, 30, 29, 30, 29, 29, 30] },
    { year: 1405, gregorianStart: "1984-09-26", months: [29, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1406, gregorianStart: "1985-09-15", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1407, gregorianStart: "1986-09-05", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1408, gregorianStart: "1987-08-25", months: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1409, gregorianStart: "1988-08-13", months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1410, gregorianStart: "1989-08-02", months: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1411, gregorianStart: "1990-07-23", months: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29] },
    { year: 1412, gregorianStart: "1991-07-12", months: [30, 29, 29, 30, 30, 29, 30, 30, 30, 29, 30, 29] },
    { year: 1413, gregorianStart: "1992-07-01", months: [29, 30, 29, 29, 30, 30, 29, 30, 30, 29, 30, 30] },
    { year: 1414, gregorianStart: "1993-06-21", months: [29, 29, 30, 29, 29, 30, 29, 30, 30, 30, 29, 30] },
    { year: 1415, gregorianStart: "1994-06-10", months: [29, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1416, gregorianStart: "1995-05-30", months: [30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1417, gregorianStart: "1996-05-18", months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1418, gregorianStart: "1997-05-07", months: [30, 29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1419, gregorianStart: "1998-04-27", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30] },
    { year: 1420, gregorianStart: "1999-04-17", months: [29, 30, 29, 29, 30, 29, 30, 30, 30, 30, 29, 30] },
    { year: 1421, gregorianStart: "2000-04-06", months: [29, 29, 30, 29, 29, 29, 30, 30, 30, 30, 29, 30] },
    { year: 1422, gregorianStart: "2001-03-26", months: [30, 29, 29, 30, 29, 29, 29, 30, 30, 30, 29, 30] },
    { year: 1423, gregorianStart: "2002-03-15", months: [30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1424, gregorianStart: "2003-03-04", months: [30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1425, gregorianStart: "2004-02-21", months: [30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
    { year: 1426, gregorianStart: "2005-02-10", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30] },
    { year: 1427, gregorianStart: "2006-01-31", months: [29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1428, gregorianStart: "2007-01-20", months: [30, 29, 29, 30, 29, 29, 30, 30, 30, 29, 30, 30] },
    { year: 1429, gregorianStart: "2008-01-10", months: [29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30] },
    { year: 1430, gregorianStart: "2008-12-29", months: [29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1431, gregorianStart: "2009-12-18", months: [29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1432, gregorianStart: "2010-12-07", months: [29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1433, gregorianStart: "2011-11-26", months: [30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29] },
    { year: 1434, gregorianStart: "2012-11-15", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 29] },
    { year: 1435, gregorianStart: "2013-11-04", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1436, gregorianStart: "2014-10-25", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1437, gregorianStart: "2015-10-14", months: [30, 29, 30, 30, 29, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1438, gregorianStart: "2016-10-02", months: [30, 29, 30, 30, 30, 29, 29, 30, 29, 29, 30, 29] },
    { year: 1439, gregorianStart: "2017-09-21", months: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30] },
    { year: 1440, gregorianStart: "2018-09-11", months: [29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29] },
    { year: 1441, gregorianStart: "2019-08-31", months: [30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29] },
    { year: 1442, gregorianStart: "2020-08-20", months: [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
    { year: 1443, gregorianStart: "2021-08-09", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1444, gregorianStart: "2022-07-30", months: [29, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1445, gregorianStart: "2023-07-19", months: [29, 30, 30, 30, 29, 30, 29, 29, 30, 29, 29, 30] },
    { year: 1446, gregorianStart: "2024-07-07", months: [29, 30, 30, 30, 29, 30, 30, 29, 29, 30, 29, 29] },
    { year: 1447, gregorianStart: "2025-06-26", months: [30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1448, gregorianStart: "2026-06-16", months: [29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30] },
    { year: 1449, gregorianStart: "2027-06-06", months: [29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1450, gregorianStart: "2028-05-25", months: [30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29] },
    { year: 1451, gregorianStart: "2029-05-14", months: [30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1452, gregorianStart: "2030-05-03", months: [30, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1453, gregorianStart: "2031-04-23", months: [29, 30, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1454, gregorianStart: "2032-04-11", months: [29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1455, gregorianStart: "2033-04-01", months: [29, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29] },
    { year: 1456, gregorianStart: "2034-03-21", months: [30, 29, 29, 30, 29, 30, 29, 30, 30, 30, 29, 30] },
    { year: 1457, gregorianStart: "2035-03-11", months: [29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30] },
    { year: 1458, gregorianStart: "2036-02-28", months: [30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30] },
    { year: 1459, gregorianStart: "2037-02-16", months: [30, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 29] },
    { year: 1460, gregorianStart: "2038-02-05", months: [30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 30] },
    { year: 1461, gregorianStart: "2039-01-26", months: [29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] },
    { year: 1462, gregorianStart: "2040-01-15", months: [30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1463, gregorianStart: "2041-01-04", months: [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1464, gregorianStart: "2041-12-24", months: [30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30] },
    { year: 1465, gregorianStart: "2042-12-14", months: [29, 30, 29, 30, 29, 29, 30, 29, 29, 30, 30, 30] },
    { year: 1466, gregorianStart: "2043-12-03", months: [30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1467, gregorianStart: "2044-11-21", months: [30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1468, gregorianStart: "2045-11-10", months: [30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1469, gregorianStart: "2046-10-31", months: [29, 29, 30, 30, 29, 30, 30, 29, 30, 30, 29, 29] },
    { year: 1470, gregorianStart: "2047-10-20", months: [30, 29, 29, 30, 30, 29, 30, 29, 30, 30, 30, 29] },
    { year: 1471, gregorianStart: "2048-10-09", months: [29, 30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1472, gregorianStart: "2049-09-28", months: [30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30, 29] },
    { year: 1473, gregorianStart: "2050-09-17", months: [30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1474, gregorianStart: "2051-09-06", months: [30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1475, gregorianStart: "2052-08-26", months: [29, 30, 29, 30, 30, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1476, gregorianStart: "2053-08-15", months: [29, 30, 29, 30, 30, 30, 29, 30, 30, 29, 29, 30] },
    { year: 1477, gregorianStart: "2054-08-05", months: [29, 29, 30, 29, 30, 30, 29, 30, 30, 30, 29, 29] },
    { year: 1478, gregorianStart: "2055-07-25", months: [30, 29, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30] },
    { year: 1479, gregorianStart: "2056-07-14", months: [29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1480, gregorianStart: "2057-07-03", months: [29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1481, gregorianStart: "2058-06-22", months: [29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1482, gregorianStart: "2059-06-11", months: [30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30] },
    { year: 1483, gregorianStart: "2060-05-31", months: [29, 29, 30, 30, 29, 30, 30, 30, 29, 30, 29, 29] },
    { year: 1484, gregorianStart: "2061-05-20", months: [30, 29, 29, 30, 30, 29, 30, 30, 29, 30, 30, 29] },
    { year: 1485, gregorianStart: "2062-05-10", months: [29, 30, 29, 29, 30, 30, 29, 30, 29, 30, 30, 30] },
    { year: 1486, gregorianStart: "2063-04-30", months: [29, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30] },
    { year: 1487, gregorianStart: "2064-04-18", months: [29, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 30] },
    { year: 1488, gregorianStart: "2065-04-07", months: [29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1489, gregorianStart: "2066-03-27", months: [29, 30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29] },
    { year: 1490, gregorianStart: "2067-03-16", months: [30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 29, 30] },
    { year: 1491, gregorianStart: "2068-03-05", months: [29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 30] },
    { year: 1492, gregorianStart: "2069-02-23", months: [29, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30] },
    { year: 1493, gregorianStart: "2070-02-12", months: [30, 29, 29, 30, 29, 30, 29, 29, 30, 30, 29, 30] },
    { year: 1494, gregorianStart: "2071-02-01", months: [30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 29, 30] },
    { year: 1495, gregorianStart: "2072-01-21", months: [30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1496, gregorianStart: "2073-01-09", months: [30, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30] },
    { year: 1497, gregorianStart: "2073-12-30", months: [29, 30, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29] },
    { year: 1498, gregorianStart: "2074-12-19", months: [30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30] },
    { year: 1499, gregorianStart: "2075-12-09", months: [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30, 29] },
    { year: 1500, gregorianStart: "2076-11-27", months: [30, 30, 29, 29, 30, 29, 29, 30, 29, 30, 30, 30] },
];

const hijriMonths=['مُحرّم','صفر','ربيع الأول','ربيع الثاني','جُمادى الأولى','جُمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
const daysDesc=['الاحد','الاثنين','الثلاثاء','الاربعاء','الخميس','الجمعة','السبت',];

module.exports=class UmAlQuraHelper  {


     static UmAlQuraMonthDays(umAlQuraDate) {
        const dateParts = umAlQuraDate.split('/');
        const year = parseInt(dateParts[2]);
        const month = parseInt(dateParts[1]) - 1;
        const yearInfo = umAlQuraDatesInfo.find(y => y.year === year);

        if (!yearInfo) {
            throw new Error('Invalid UmAlQura year');
        }

        return yearInfo.months[month];
    };

    static isValidUmAlQuraDate (umAlQuraDate) {
        const dateParts = umAlQuraDate.split('/');
        const day = parseInt(dateParts[0]);
        return day <= this.UmAlQuraMonthDays(umAlQuraDate);
    };

    static umAlQuraToGregorian (umAlQuraDate) {
        console.log('umAlQuraToGregorian:' + umAlQuraDate);
        if (!this.isValidUmAlQuraDate(umAlQuraDate)) {
            throw new Error('Invalid UmAlQura date');
        }

        const dateParts = umAlQuraDate.split('/');
        const year = parseInt(dateParts[2]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[0]);
        const yearInfo = umAlQuraDatesInfo.find(y => y.year === year);

        if (!yearInfo) {
            throw new Error('Invalid UmAlQura year');
        }

        const gregorianStartDate = new Date(yearInfo.gregorianStart);
        const daysInPreviousMonths = yearInfo.months.slice(0, month).reduce((acc, days) => acc + days, 0);
        let date = new Date(gregorianStartDate.setDate(gregorianStartDate.getDate() + daysInPreviousMonths + day - 1))
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    static gregorianToUmAlQura (gregorianDate) {        
        gregorianDate = new Date(Date.UTC(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate()));
        for (const yearInfo of umAlQuraDatesInfo) {
            const gregorianStartDate = new Date(yearInfo.gregorianStart);
            const gregorianEndDate = new Date(gregorianStartDate);
            gregorianEndDate.setDate(
                gregorianEndDate.getDate() + yearInfo.months.reduce((acc, days) => acc + days, 0) - 1
            );

            if (gregorianDate >= gregorianStartDate && gregorianDate <= gregorianEndDate) {
                const daysFromStart = Math.floor(
                    (gregorianDate - gregorianStartDate) / (24 * 60 * 60 * 1000)
                );
                let cumulativeDays = 0;

                for (let month = 0; month < yearInfo.months.length; month++) {
                    const daysInMonth = yearInfo.months[month];
                    if (daysFromStart < cumulativeDays + daysInMonth) {
                        const day = daysFromStart - cumulativeDays + 1;

                        // Add 1 day to correct potential offset
                        const correctedDay = day > daysInMonth ? day - daysInMonth : day;

                        let umAlQuraDateStr =  `${correctedDay.toString().padStart(2, '0')}/${(month + 1)
                            .toString()
                            .padStart(2, '0')}/${yearInfo.year}`;
                            
                            let umAlQuraParts=umAlQuraDateStr.split('/');
                            let umAlQuraDate= {};
                            umAlQuraDate.date=umAlQuraDateStr; // dd/MM/yyyy string
                            umAlQuraDate.year=parseInt(umAlQuraParts[2]);
                            umAlQuraDate.month=parseInt(umAlQuraParts[1]);
                            umAlQuraDate.day=parseInt(umAlQuraParts[0]);
                            umAlQuraDate.monthName=hijriMonths[umAlQuraDate.month -1];
                            umAlQuraDate.dayName=daysDesc[gregorianDate.getDay()];
                            umAlQuraDate.fullDate= daysDesc[gregorianDate.getDay()] + ', ' + umAlQuraDate.day + ' '  + hijriMonths[umAlQuraDate.month] + umAlQuraDate.year ;
                            return umAlQuraDate;
                    }
                    cumulativeDays += daysInMonth;
                }
            }
        }

        throw new Error('Gregorian date out of range');
    };
	
	static getCurrentDate(){
         let crDate=new Date();  
         let crDateHijri =this.gregorianToUmAlQura(crDate);
         console.log('getCurrentDate:' + crDateHijri);
         return crDateHijri;  
      }
}



