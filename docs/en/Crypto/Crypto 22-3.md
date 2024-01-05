# Crypto 22-3
## PI-Cut-Choo and Friends: Compact Blind Signatures via Parallel Instance Cut-and-Choose and More.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rutchathon Chairattana-Apirom, Brown University, Providence, RI, 02906, USA
* Anna Lysyanskaya, Brown University, Providence, RI, 02906, USA
### Abstract
> Blind signature schemes are one of the best-studied tools for privacy-preserving authentication. Unfortunately, known constructions of provably secure blind signatures either rely on non-standard hardness assumptions, or require parameters that grow linearly with the number of concurrently issued signatures, or involve prohibitively inefficient general techniques such as general secure two-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_1](https://doi.org/10.1007/978-3-031-15982-4_1)
## Augmented Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#augmented-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#augmented-random-oracles)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> We propose a new paradigm for justifying the security of random oracle-based protocols, which we call the Augmented Random Oracle Model (AROM). We show that the AROM captures a wide range of important random oracle impossibility results. Thus a proof in the AROM implies some resiliency to such impossibilities. We then consider three ROM transforms which are subject to impossibilities: Fiat-Shamir (FS), Fujisaki-Okamoto (FO), and Encrypt-with-Hash (EwH). We show in each case how to obtain security in the AROM by strengthening the building blocks or modifying the transform.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_2](https://doi.org/10.1007/978-3-031-15982-4_2)
## To Label, or Not To Label (in Generic Groups).
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#to-label-or-not-to-label-in-generic-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#to-label-or-not-to-label-in-generic-groups)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Generic groups are an important tool for analyzing the feasibility and in-feasibility of group-based cryptosystems. There are two distinct wide-spread versions of generic groups, Shoup’s and Maurer’s, the main difference being whether or not group elements are given explicit labels. The two models are often treated as equivalent. In this work, however, we demonstrate that the models are in fact quite different, and care is needed when stating generic group results:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_3](https://doi.org/10.1007/978-3-031-15982-4_3)
## Lower Bound on SNARGs in the Random Oracle Model.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#lower-bound-on-snargs-in-the-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#lower-bound-on-snargs-in-the-random-oracle-model)
### Authors
* Iftach Haitner, Tel-Aviv University, Tel Aviv, Israel
* Daniel Nukrai, Tel-Aviv University, Tel Aviv, Israel
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Succinct non-interactive arguments (SNARGs) have become a fundamental primitive in the cryptographic community. The focus of this work is constructions of SNARGs in the Random Oracle Model (ROM). Such SNARGs enjoy post-quantum security and can be deployed using lightweight cryptography to heuristically instantiate the random oracle. A ROM-SNARG is \((t,\varepsilon )\)-sound if no \(t\)-query malicious prover can convince the verifier to accept a false statement with probability larger than \(\varepsilon \). Recently, Chiesa-Yogev (CRYPTO ’21) presented a ROM-SNARG of length \({\varTheta }(\log (t/\varepsilon ) \cdot \log t)\) (ignoring \(\log n\) factors, for n being the instance size). This improvement, however, is still far from the (folklore) lower bound of \(\varOmega (\log (t/\varepsilon ))\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_4](https://doi.org/10.1007/978-3-031-15982-4_4)
## Time-Space Tradeoffs for Sponge Hashing: Attacks and Limitations for Short Collisions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)
### Authors
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, Washington, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> Sponge hashing is a novel alternative to the popular Merkle-Damgård hashing design. The sponge construction has become increasingly popular in various applications, perhaps most notably, it underlies the SHA-3 hashing standard. Sponge hashing is parametrized by two numbers, r and c (bitrate and capacity, respectively), and by a fixed-size permutation on \(r+c\) bits. In this work, we study the collision resistance of sponge hashing instantiated with a random permutation by adversaries with arbitrary S-bit auxiliary advice input about the random permutation that make T online queries. Recent work by Coretti et al. (CRYPTO ’18) showed that such adversaries can find collisions (with respect to a random c-bit initialization vector) with advantage \(\varTheta (ST^2/2^c + T^2/ 2^{r})\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_5](https://doi.org/10.1007/978-3-031-15982-4_5)
## On Time-Space Tradeoffs for Bounded-Length Collisions in Merkle-Damgård Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> We study
 the power of preprocessing adversaries in finding bounded-length collisions in the widely used Merkle-Damgård (MD) hashing in the random oracle model. Specifically, we consider adversaries with arbitrary S-bit advice about the random oracle and can make at most T queries to it. Our goal is to characterize the advantage of such adversaries in finding a B-block collision in an MD hash function constructed using the random oracle with range size N as the compression function (given a random salt).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_6](https://doi.org/10.1007/978-3-031-15982-4_6)
## Time-Space Lower Bounds for Finding Collisions in Merkle-Damgård Hash Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)
### Authors
* Akshima, University of Chicago, Chicago, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### Abstract
> We revisit the problem of finding B-block-long collisions in Merkle-Damgård Hash Functions in the auxiliary-input random oracle model, in which an attacker gets a piece of S-bit advice about the random oracle and makes T oracle queries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_7](https://doi.org/10.1007/978-3-031-15982-4_7)
## Sustained Space and Cumulative Complexity Trade-Offs for Data-Dependent Memory-Hard Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)
### Authors
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Blake Holman, Purdue University, West Lafayette, IN, 47906, USA
### Abstract
> Memory-hard functions (MHFs) are a useful cryptographic primitive which can be used to design egalitarian proof of work puzzles and to protect low entropy secrets like passwords against brute-force attackers. Intuitively, a memory-hard function is a function whose evaluation costs are dominated by memory costs even if the attacker uses specialized hardware (FPGAs/ASICs), and several cost metrics have been proposed to quantify this intuition. For example, space-time cost looks at the product of running time and the maximum space usage over the entire execution of an algorithm. Alwen and Serbinenko (STOC 2015) observed that the space-time cost of evaluating a function multiple times may not scale linearly in the number of instances being evaluated and introduced the stricter requirement that a memory-hard function has high cumulative memory complexity (CMC) to ensure that an attacker’s amortized space-time costs remain large even if the attacker evaluates the function on multiple different inputs in parallel. Alwen et al. (EUROCRYPT 2018) observed that the notion of CMC still gives the attacker undesirable flexibility in selecting space-time tradeoffs e.g., while the MHF \(\texttt{Scrypt}\) has maximal CMC \(\varOmega (N^2)\), an attacker could evaluate the function with constant O(1) memory in time \(O(N^2)\). Alwen et al. introduced an even stricter notion of Sustained Space complexity and designed an MHF which has \(s=\varOmega (N/\log N)\) sustained complexity \(t=\varOmega (N)\) i.e., any algorithm evaluating the function in the parallel random oracle model must have at least \(t=\varOmega (N)\) steps where the memory usage is at least \(\varOmega (N/\log N)\). In this work, we use dynamic pebbling games and dynamic graphs to explore tradeoffs between sustained space complexity and cumulative memory complexity for data-dependent memory-hard functions such as Argon2id and \(\texttt{Scrypt}\). We design our own dynamic graph (dMHF) with the property that any dynamic pebbling strategy either (1) has \(\varOmega (N)\) rounds with \(\varOmega (N)\) space, or (2) has CMC \(\varOmega (N^{3-\epsilon })\)—substantially larger than \(N^2\). For Argon2id we show that any dynamic pebbling strategy either(1) has \(\varOmega (N)\) rounds with \(\varOmega (N^{1-\epsilon })\) space, or (2) has CMC \(\omega (N^2)\). We also present a dynamic version of DRSample (Alwen et al. 2017) for which any dynamic pebbling strategy either (1) has \(\varOmega (N)\) rounds with \(\varOmega (N/\log N)\) space, or (2) has CMC \(\varOmega (N^3/\log N)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_8](https://doi.org/10.1007/978-3-031-15982-4_8)
## Low Communication Complexity Protocols, Collision Resistant Hash Functions and Secret Key-Agreement Protocols.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)
### Authors
* Shahar P. Cohen, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We    study communication complexity in computational settings where bad inputs may exist, but they should be hard to find for any computationally bounded adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_9](https://doi.org/10.1007/978-3-031-15982-4_9)
## Accelerating the Delfs-Galbraith Algorithm with Fast Subfield Root Detection.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)
### Authors
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Jia Shi, University of Waterloo, Waterloo, Canada
### Abstract
> We give a new algorithm for finding an isogeny from a given supersingular elliptic curve \(E/\mathbb {F}_{p^2}\) to a subfield elliptic curve \(E'/\mathbb {F}_p\), which is the bottleneck step of the Delfs–Galbraith algorithm for the general supersingular isogeny problem. Our core ingredient is a novel method of rapidly determining whether a polynomial \(f \in L[X]\) has any roots in a subfield \(K \subset L\), while avoiding expensive root-finding algorithms. In the special case when \(f=\Upphi _{\ell ,p}(X,j) \in \mathbb {F}_{p^2}[X]\), i.e., when f is the \(\ell \)-th modular polynomial evaluated at a supersingular j-invariant, this provides a means of efficiently determining whether there is an \(\ell \)-isogeny connecting the corresponding elliptic curve to a subfield curve. Together with the traditional Delfs–Galbraith walk, inspecting many \(\ell \)-isogenous neighbours in this way allows us to search through a larger proportion of the supersingular set per unit of time. Though the asymptotic \(\tilde{O}(p^{1/2})\) complexity of our improved algorithm remains unchanged from that of the original Delfs–Galbraith algorithm, our theoretical analysis and practical implementation both show a significant reduction in the runtime of the subfield search. This sheds new light on the concrete hardness of the general supersingular isogeny problem (i.e. the foundational problem underlying isogeny-based cryptography), and has immediate implications on the bit-security of schemes like B-SIDH and SQISign for which Delfs–Galbraith is the best known classical attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_10](https://doi.org/10.1007/978-3-031-15982-4_10)
## Secret Can Be Public: Low-Memory AEAD Mode for High-Order Masking.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> We propose a new AEAD mode of operation for an efficient countermeasure against side-channel attacks. Our mode achieves the smallest memory with high-order masking, by minimizing the states that are duplicated in masking. An s-bit key-dependent state is necessary for achieving s-bit security, and the conventional schemes always protect the entire s bits with masking. We reduce the protected state size by introducing an unprotected state in the key-dependent state: we protect only a half and give another half to a side-channel adversary. Ensuring independence between the unprotected and protected states is the key technical challenge since mixing these states reveals the protected state to the adversary. We propose a new mode \(\textsf{HOMA}\) that achieves s-bit security using a tweakable block cipher with the s/2-bit block size. We also propose a new primitive for instantiating \(\textsf{HOMA}\) with \(s=128\) by extending the SKINNY tweakable block cipher to a 64-bit plaintext block, a 128-bit key, and a \((256+3)\)-bit tweak. We make hardware performance evaluation by implementing \(\textsf{HOMA}\) with high-order masking for \(d \le 5\). For any \(d > 0\), \(\textsf{HOMA}\) outperforms the current state-of-the-art \(\textsf{PFB}\_\textsf{Plus}\) by reducing the circuit area larger than that of the entire S-box.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_11](https://doi.org/10.1007/978-3-031-15982-4_11)
## Partial Key Exposure Attacks on BIKE, Rainbow and NTRU.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Weiqiang Wen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### Abstract
> In a so-called partial key exposure attack one obtains some information about the secret key, e.g. via some side-channel leakage. This information might be a certain


 fraction of the secret key bits (erasure model) or some erroneous version of the secret key (error model). The goal is to recover the secret key from the leaked information.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_12](https://doi.org/10.1007/978-3-031-15982-4_12)
## Improving Support-Minors Rank Attacks: Applications to Gđisplaystyle eMSS and Rainbow.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)
### Authors
* John Baena, Universidad Nacional de Colombia, Bogotá, Colombia
* Daniel Cabarcas, Universidad Nacional de Colombia, Bogotá, Colombia
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
### Abstract
> The Support-Minors (SM) method has opened new routes to attack multivariate schemes with rank properties that were previously impossible to exploit, as shown by the recent attacks of [9, 40] on the Round 3 NIST candidates G\(\displaystyle e\)MSS and Rainbow respectively. In this paper, we study this SM approach more in depth and we propose a greatly improved attack on G\(\displaystyle e\)MSS based on this Support-Minors method. Even though G\(\displaystyle e\)MSS was already affected by [40], our attack affects it even more and makes it completely unfeasible to repair the scheme by simply increasing the size of its parameters or even applying the recent projection technique from [36] whose purpose was to make G\(\displaystyle e\)MSS immune to [40]. For instance, our attack on the G\(\displaystyle e\)MSS128 parameter set has estimated time complexity \(\displaystyle 2^{72}\), and repairing the scheme by applying [36] would result in a signature with slower signing time by an impractical factor of \(\displaystyle 2^{14}\). Another contribution is to suggest optimizations that can reduce memory access costs for an XL strategy on a large SM system using the Block-Wiedemann algorithm as subroutine when these costs are a concern. In a memory cost model based on [7], we show that the rectangular MinRank attack from [9] may indeed reduce the security for all Round 3 Rainbow parameter sets below their targeted security strengths, contradicting the lower bound claimed by [41] using the same memory cost model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_13](https://doi.org/10.1007/978-3-031-15982-4_13)
## log *-Round Game-Theoretically-Fair Leader Election.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#log-round-game-theoretically-fair-leader-election)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#log-round-game-theoretically-fair-leader-election)
### Authors
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, Department of Computer Science, Georgetown University, Washington D.C., 20057, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
### Abstract
> It is well-known that in the presence of majority coalitions, strongly fair coin toss is impossible. A line of recent works have shown that by relaxing the fairness notion to game theoretic, we can overcome this classical lower bound. In particular, Chung et al. (CRYPTO’21) showed how to achieve approximately (game-theoretically) fair leader election in the presence of majority coalitions, with round complexity as small as \(O(\log \log n)\) rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_14](https://doi.org/10.1007/978-3-031-15982-4_14)
## Gossiping for Communication-Efficient Broadcast.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#gossiping-for-communication-efficient-broadcast)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#gossiping-for-communication-efficient-broadcast)
### Authors
* Georgios Tsimos, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Charalampos Papamanthou, Yale University, New Haven, USA
### Abstract
> Byzantine 

Broadcast is crucial for many cryptographic protocols such as secret sharing, multiparty computation and blockchain consensus. In this paper we apply gossiping (propagating a message by sending to a few random parties who in turn do the same, until the message is delivered) and propose new communication-efficient protocols, under dishonest majority, for Single-Sender Broadcast (BC) and Parallel Broadcast (PBC), improving the state-of-the-art in several ways.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_15](https://doi.org/10.1007/978-3-031-15982-4_15)
## Nearly Optimal Property Preserving Hashing.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#nearly-optimal-property-preserving-hashing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#nearly-optimal-property-preserving-hashing)
### Authors
* Justin Holmgren, NTT Research, Sunnyvale, CA, 94085, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
* Minghao Liu, Northeastern University, Boston, MA, 02115, USA
* LaKyah Tyner, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
### Abstract
> Property-preserving hashing (PPH) consists of a family of compressing hash functions h such that, for any two inputs x, y, we can correctly identify whether some property P(x, y) holds given only the digests h(x), h(y). In a basic PPH, correctness should hold with overwhelming probability over the choice of h when x, y are worst-case values chosen a-priori and independently of h. In an adversarially robust PPH (RPPH), correctness must hold even when x, y are chosen adversarially and adaptively depending on h. Here, we study (R)PPH for the property that the Hamming distance between x and y is at most t.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_16](https://doi.org/10.1007/978-3-031-15982-4_16)
## Collision-Resistance from Multi-Collision-Resistance.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#collision-resistance-from-multi-collision-resistance)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#collision-resistance-from-multi-collision-resistance)
### Authors
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
### Abstract
> Collision-resistant hash functions (\(\textsf{CRH}\)) are a fundamental and ubiquitous cryptographic primitive. Several recent works have studied a relaxation of \(\textsf{CRH}\) called t-way multi-collision-resistant hash functions (\(t\text {-}\textsf{MCRH}\)). These are families of functions for which it is computationally hard to find a t-way collision, even though such collisions are abundant (and even \((t-1)\)-way collisions may be easy to find). The case of \(t=2\) corresponds to standard \(\textsf{CRH}\), but it is natural to study t-\(\textsf{MCRH}\) for larger values of t.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_17](https://doi.org/10.1007/978-3-031-15982-4_17)
## Post-quantum Simulatable Extraction with Minimal Assumptions: Black-Box and Constant-Round.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)
### Authors
* Nai-Hui Chia, Rice University, Houston, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> From the minimal assumption of post-quantum semi-honest oblivious transfers, we build the first \(\varepsilon \)-simulatable two-party computation (2PC) against quantum polynomial-time (QPT) adversaries that is both constant-round and black-box (for both the construction and security reduction). A recent work by Chia, Chung, Liu, and Yamakawa (FOCS’21) shows that post-quantum 2PC with standard simulation-based security is impossible in constant rounds, unless either \({\textbf{NP}}\subseteq \textbf{BQP}\) or relying on non-black-box simulation. The \(\varepsilon \)-simulatability we target is a relaxation of the standard simulation-based security that allows for an arbitrarily small noticeable simulation error \(\varepsilon \). Moreover, when quantum communication is allowed, we can further weaken the assumption to post-quantum secure one-way functions (PQ-OWFs), while maintaining the constant-round and black-box property.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_18](https://doi.org/10.1007/978-3-031-15982-4_18)
## The Gap Is Sensitive to Size of Preimages: Collapsing Property Doesn't Go Beyond Quantum Collision-Resistance for Preimages Bounded Hash Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)
### Authors
* Shujiao Cao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Rui Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shujiao Cao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Rui Xue, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> As an enhancement of quantum collision-resistance, the collapsing property of hash functions proposed by Unruh (EUROCRYPT 2016) emphasizes the hardness for distinguishing a superposition state of a hash value from a collapsed one. The collapsing property trivially implies the quantum collision-resistance. However, it remains to be unknown whether there is a reduction from the collapsing hash functions to the quantum collision-resistant hash functions. In this paper, we further study the relations between these two properties and derive two intriguing results as follows:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_19](https://doi.org/10.1007/978-3-031-15982-4_19)
## New Constructions of Collapsing Hashes.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#new-constructions-of-collapsing-hashes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#new-constructions-of-collapsing-hashes)
### Authors
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### Abstract
> Collapsing is a post-quantum strengthening of collision resistance, needed to lift many classical results to the quantum setting. Unfortunately, the only existing standard-model proofs of collapsing hashes require LWE. We construct the first collapsing hashes from the quantum hardness of any one of the following problems:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_20](https://doi.org/10.1007/978-3-031-15982-4_20)
## Statistically Sender-Private OT from LPN and Derandomization.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#statistically-sender-private-ot-from-lpn-and-derandomization)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#statistically-sender-private-ot-from-lpn-and-derandomization)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### Abstract
> We construct a two-message oblivious transfer protocol with statistical sender privacy (SSP OT) based on the Learning Parity with Noise (LPN) Assumption and a standard Nisan-Wigderson style derandomization assumption. Beyond being of interest on their own, SSP OT protocols have proven to be a powerful tool toward minimizing the round complexity in a wide array of cryptographic applications from proofs systems, through secure computation protocols, to hard problems in statistical zero knowledge (SZK).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_21](https://doi.org/10.1007/978-3-031-15982-4_21)
## Constructive Post-Quantum Reductions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#constructive-post-quantum-reductions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#constructive-post-quantum-reductions)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rechovot, Israel
* Yael Tauman Kalai, Microsoft Research, Cambridge, MA, USA
* Yael Tauman Kalai, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> Is it possible to convert classical reductions into post-quantum ones? It is customary to argue that while this is problematic in the interactive setting, non-interactive reductions do carry over. However, when considering quantum auxiliary input, this conversion results in a non-constructive post-quantum reduction that requires duplicating the quantum auxiliary input, which is in general inefficient or even impossible. This violates the win-win premise of provable cryptography: an attack against a cryptographic primitive should lead to an algorithmic advantage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_22](https://doi.org/10.1007/978-3-031-15982-4_22)
## Differential Cryptanalysis in the Fixed-Key Model.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#differential-cryptanalysis-in-the-fixed-key-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#differential-cryptanalysis-in-the-fixed-key-model)
### Authors
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, University of Bergen, Bergen, Norway
### Abstract
> A systematic approach to the fixed-key analysis of differential probabilities is proposed. It is based on the propagation of ‘quasidifferential trails’, which keep track of probabilistic linear relations on the values satisfying a differential characteristic in a theoretically sound way. It is shown that the fixed-key probability of a differential can be expressed as the sum of the correlations of its quasidifferential trails.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_23](https://doi.org/10.1007/978-3-031-15982-4_23)
## Simplified MITM Modeling for Permutations: New (Quantum) Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)
### Authors
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
### Abstract
> Meet-in-the-middle (MITM) is a general paradigm where internal states are computed along two independent paths (‘forwards’ and ‘backwards’) that are then matched. Over time, MITM attacks improved using more refined techniques and exploiting additional freedoms and structure, which makes it more involved to find and optimize such attacks. This has led to the use of detailed attack models for generic solvers to automatically search for improved attacks, notably a MILP model developed by Bao et al. at EUROCRYPT 2021.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_24](https://doi.org/10.1007/978-3-031-15982-4_24)
## Constructing and Deconstructing Intentional Weaknesses in Symmetric Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### Abstract
> Deliberately weakened ciphers are of great interest in political discussion on law enforcement, as in the constantly recurring crypto wars, and have been put in the spotlight of academics by recent progress. A paper at Eurocrypt 2021 showed a strong indication that the security of the widely-deployed stream cipher GEA-1 was deliberately and secretly weakened to 40 bits in order to fulfill European export restrictions that have been in place in the late 1990s. However, no explanation of how this could have been constructed was given. On the other hand, we have seen the MALICIOUS design framework, published at CRYPTO 2020, that allows to construct tweakable block ciphers with a backdoor, where the difficulty of recovering the backdoor relies on well-understood cryptographic assumptions. The constructed tweakable block cipher however is rather unusual and very different from, say, general-purpose ciphers like the AES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_25](https://doi.org/10.1007/978-3-031-15982-4_25)
## Simon's Algorithm and Symmetric Crypto: Generalizations and Automatized Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto%2022-3.md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2022-3.md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)
### Authors
* Federico Canale, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
### Abstract
> In this paper we deepen our understanding of how to apply Simon’s algorithm to break symmetric cryptographic primitives.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_26](https://doi.org/10.1007/978-3-031-15982-4_26)
