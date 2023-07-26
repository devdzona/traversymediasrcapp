import puppeteer from "puppeteer";
//import fs from "fs"
import connectDB from "./database/db.js";
import dotenv from "dotenv";

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

    await browser.close()
}

run()