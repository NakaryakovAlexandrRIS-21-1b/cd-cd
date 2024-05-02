const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const test = `${Math.random()}`;

(async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:9000");

        await driver.sleep(1000);

        const logField = driver.findElement(By.id("login"));
        logField.sendKeys(test);
        await driver.sleep(100);

        const passField = driver.findElement(By.id("pass"));
        passField.sendKeys(test);
        await driver.sleep(100);

        console.log("Вход");
        const logInBtn = driver.findElement(By.id("logInBtn"));
        logInBtn.click();
        await driver.sleep(1000);

        let flag = !(driver.findElements(By.className("errMessage")))
        await assert.equal(flag, true); // Проверка
        // КОНЕЦ ПРОГРАММЫ
    } finally {
        await driver.quit();
    }
})();