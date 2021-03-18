import re
f = open('sitemap.xml','r')
res = f.readlines()
ff = open('test.txt', "a")
for d in res:
    data = re.findall(r'<loc>(https:\/\/.+)<\/loc>',d)
    for i in data:
        x = re.sub(":", "/", i[27:])
        final_output = f"[[redirects]]\n  from = \"{i[27:]}\" \n  to = \"{x}\" \n  status = 301 \n  force = true\n\n"
        ff.write(final_output)     
        