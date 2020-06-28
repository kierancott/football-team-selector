# Technical Challenge: Football Team Selector
## Back-end Architecture - Laravel Blade

### Getting Started:

The API is hosted [live on Heroku here](https://tranquil-beyond-86261.herokuapp.com/).

For local development, the Virtual Machine is already configured from ScotchBox, and the Vagrant Box set up to use Laravel's Homestead. To get started:

1. Clone this repo and `cd` into folder
2. In your new directory, run `composer install`
3. Run `vendor/bin/homestead make`
4. Copy the `.env.example` file to a new `.env` file:
`cp .env.example .env`

5. Update the db, username and password your `.env` file
6. Run `vagrant up`
7. Login to the virtual machine: `vagrant ssh`
8. Navigate to new `code` folder: `cd code`
9. Generate a new artisan key: `art key:generate`

Visit `http://homestead.test` on Mac or `http://localhost:8000` on Windows:

![Default view on Start](https://imgur.com/y4gcPKB.jpg?)

---

# Team Selector API

All requests should:

- Use the basename `https://tranquil-beyond-86261.herokuapp.com/api/`
- Be sent using JSON and with the `Accept: application/json` header.

End point(s):

- `/api/players`
- `/api/teams`

### Players - `/api/players`

#### `GET /api/players`

Returns players as JSON object:

```
{
    [
        {
            "id": "1",
            "name": "Ronaldo",
            "skill": "4",
            team: null
        },
        {
            "id": "2",
            "name": "Anatoly Ivanishin"
            "skill": "2",
            team: null
        },
        {
            "id": "3",
            "name": "Ivan Vagner"
            "skill": "1",
            team: null
        },
        {
            "id": "4",
            "name": "James Kovinsky"
            "skill": "3",
            team: null
        },
    ]
}
```

#### `POST /api/players`

Add a player to the database as JSON object:

```
{
    {
        "name": "Messi",
        "skill": "5"
    },
}
```

#### `PATCH /api/players/:id` where `:id` represents a player ID

Add a player to the database as JSON object:

```
{
    {
        "name": "Lionel Messi",
        "skill": "4"
    },
}
```

#### `DELETE /api/players/:id` where `:id` represents a player ID

- Deletes the corresponding player. No body required.

### Teams - `/api/teams`

#### `GET /api/teams`

Returns players as JSON object with teams assigned:

```
{
    [
        {
            "id": "1",
            "name": "Ronaldo",
            "skill": "4",
            team: 1
        },
        {
            "id": "2",
            "name": "Anatoly Ivanishin"
            "skill": "2",
            team: 2
        },
        {
            "id": "3",
            "name": "Ivan Vagner"
            "skill": "1",
            team: 2
        },
        {
            "id": "4",
            "name": "James Kovinsky"
            "skill": "3",
            team: 1
        },
    ]
}
```


---

### Troubleshooting:

#### Q: When I visit `http://homestead.test` on Mac or `http://localhost:8000` on Windows, I get an Error 500: Internal Server Error
A:

Reload the vagrant box and provision it:

`vagrant reload --provision`


Generate a new app key:

`php artisan key:generate`

#### Q: When I run `vagrant up`, I get the following error:
```
Vagrant was unable to mount VirtualBox shared folders. This is usually
because the filesystem "vboxsf" is not available. This filesystem is
made available via the VirtualBox Guest Additions and kernel module.
Please verify that these guest additions are properly installed in the
guest. This is not a bug in Vagrant and is usually caused by a faulty
Vagrant box. For context, the command attempted was:

mount -t vboxsf -o dmode=777,fmode=666,uid=1000,gid=1000 var_www /var/www

The error output from the command was:

: No such device
```
A:

First, install the `vagrant-vbguest` plugin:

`vagrant plugin install vagrant-vbguest`


Next, initialise the plugin:

`vagrant vbguest`

---

## Laravel

## Documentation

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

---

## Scotch Box

## Documentation

* Check out the official docs at: [box.scotch.io](https://box.scotch.io)
* [Read the getting started article](https://scotch.io/bar-talk/introducing-scotch-box-a-vagrant-lamp-stack-that-just-works)
* [Read the 3.5 release article](https://scotch.io/bar-talk/announcing-scotch-box-v35-and-scotch-box-pro-v15-the-big-switcheroo)
