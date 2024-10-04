// Supabase konfigurační údaje
const supabaseUrl = 'https://wjupjdxmldzqkmgioroo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdXBqZHhtbGR6cWttZ2lvcm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNzI0MjUsImV4cCI6MjA0MzY0ODQyNX0.t0OcCAPUn-g75c9Ko2kGWrPum5YvtWs1NF8iEtoc8cs';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const feedback = document.getElementById('feedback').value;

    const { data, error } = await supabase
        .from('feedback')
        .insert([{ feedback: feedback }]);

    if (error) {
        console.error('Chyba při odesílání zpětné vazby: ', error);
    } else {
        alert('Zpětná vazba byla úspěšně odeslána!');
        document.getElementById('feedbackForm').reset();
    }
});
