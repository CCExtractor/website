import re
f = open('sitemap.xml','r')
res = f.readlines()
ff = open('test.txt', "a")
for d in res:
    data = re.findall(r'<loc>(https:\/\/.+)<\/loc>',d)
    for i in data:
        x = re.sub(":", "/", i[27:])
        final_output = f"from = \"{i[27:]}\" \nto = \"{x}\" \nstatus = 301 \nforce = true,\n\n"
        ff.write(final_output)     
        