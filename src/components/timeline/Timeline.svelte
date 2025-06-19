<script>
    import TimelineItemLeft from "./TimelineItemLeft.svelte";
    import TimelineItemRight from "./TimelineItemRight.svelte";
</script>

<h3 class="lg:text-4xl font-semibold bg-neutral-950 text-center py-10">
    Timeline Bytes<span class="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">fest</span>
    <span class="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">2025</span>
    <div class="mt-4 m-auto h-[4px] w-28 bg-blue-500"></div>
</h3>
<ul class="timeline timeline-vertical bg-neutral-950 pt-10 pb-20">
    <TimelineItemRight 
        title="Grand Opening, Seminar Remote Worker Indonesia" 
        date={"<strong>19</strong> Juni 2025"}
    />
    <TimelineItemRight
        title="Pembukaan Pendaftaran Semua Lomba" 
        date={"<strong>19</strong> Juni 2025"}
    />
    <TimelineItemLeft 
        title={"Pendaftaran Desain Web <span class=\"text-slate-400\">(Batch 1)</span>"}
        date={"<strong>19</strong> Juni - <strong>4</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title={"Pendaftaran Poster dan Esai <span class=\"text-slate-400\">(Batch 1)</span>"}
        date={"<strong>19</strong> Juni - <strong>5</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title="Pendaftaran Futsal"
        date={"<strong>19</strong> Juni - <strong>26</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title={"Pendaftaran Desain Web <span class=\"text-slate-400\">(Batch 2)</span>"}
        date={"<strong>5 - 19</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title={"Pendaftaran Poster dan Esai <span class=\"text-slate-400\">(Batch 2)</span>"}
        date={"<strong>6 - 21</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title="Pengumpulan Karya Poster & Esai"
        date={"<strong>20 - 25</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title="Pengumpulan Karya Desain Web"
        date={"<strong>23 - 24</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title="Technical Meeting Futsal"
        date={"<strong>26</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title="Penjurian Esai & Poster"
        date={"<strong>26 - 29</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title="Penjurian Desain Web"
        date={"<strong>25 - 27</strong> Juli 2025"}
    />
    <TimelineItemLeft
        title="Pengumuman Finalis Desain Web (10 Besar)"
        date={"<strong>27</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title="Technocal Meeting Finalis Desain Web"
        date={"<strong>28</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title={"Presentasi Final Desain Web <span class=\"text-slate-400\">(Penjurian Akhir)</span>"}
        date={"<strong>29</strong> Juli 2025"}
    />
    <TimelineItemRight 
        title={"Lomba Futsal Hari Pertama <span class=\"text-slate-400\">(Penyisihan)</span>"}
        date={"<strong>2</strong> Agustus 2025"}
    />
    <TimelineItemRight 
        title={"Lomba Futsal Hari Kedua <span class=\"text-slate-400\">(Final)</span>"}
        date={"<strong>3</strong> Agustus 2025"}
    />
    <TimelineItemRight 
        title="Grand Closing & Rewarding"
        date={"<strong>3</strong> Agustus 2025"}
    />
    
</ul>