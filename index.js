import puppeteer from "puppeteer";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import updateCourses from "./database/courseControler.js";

dotenv.config()
connectDB()

const run = async () => {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.goto('https://www.traversymedia.com/')

    const courses = await page.evaluate(() =>
        Array.from(document.querySelectorAll('#cscourses .card'), (e) => ({
            title: e.querySelector('.card-body h3').innerText,
            level: e.querySelector('.card-body .level').innerText,
            url: e.querySelector('.card-footer a').href
        }))
    )

    for (const c of courses) {
        updateCourses(c)
    }

    await browser.close()
}

run()