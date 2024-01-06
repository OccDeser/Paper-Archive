# Asiacrypt[2021-2]
## Secure and Efficient Software Masking on Superscalar Pipelined Processors.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#secure-and-efficient-software-masking-on-superscalar-pipelined-processors)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#secure-and-efficient-software-masking-on-superscalar-pipelined-processors)
### Authors
* Barbara Gigerl, Graz University of Technology, Graz, Austria
* Robert Primas, Graz University of Technology, Graz, Austria
* Stefan Mangard, Graz University of Technology, Graz, Austria
* Stefan Mangard, Lamarr Security Research, Graz, Austria
### Abstract
> Physical side-channel attacks like power analysis pose a serious threat to cryptographic devices in real-world applications. Consequently, devices implement algorithmic countermeasures like masking. In the past, works on the design and verification of masked software implementations have mostly focused on simple microprocessors that find usage on smart cards. However, many other applications such as in the automotive industry require side-channel protected cryptographic computations on much more powerful CPUs. In such situations, the security loss due to complex architectural side-effects, the corresponding performance degradation, as well as discussions of suitable probing models and verification techniques are still vastly unexplored research questions.
> 
> We answer these questions and perform a comprehensive analysis of more complex processor architectures in the context of masking-related side effects. First, we analyze the RISC-V SweRV core—featuring a 9-stage pipeline, two execution units, and load/store buffers—and point out a significant gap between security in a simple software probing model and practical security on such CPUs. More concretely, we show that architectural side effects of complex CPU architectures can significantly reduce the protection order of masked software, both via formal analysis in the hardware probing model, as well as empirically via gate-level timing simulations. We then discuss the options of fixing these problems in hardware or leaving them as constraints to software. Based on these software constraints, we formulate general rules for the design of masked software on more complex CPUs. Finally, we compare several implementation strategies for masking schemes and present in a case study that designing secure masked software for complex CPUs is still possible with overhead as low as 13%.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_1](https://doi.org/10.1007/978-3-030-92075-3_1)
## Fault-Injection Attacks Against NIST's Post-Quantum Cryptography Round 3 KEM Candidates.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#fault-injection-attacks-against-nists-post-quantum-cryptography-round-3-kem-candidates)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#fault-injection-attacks-against-nists-post-quantum-cryptography-round-3-kem-candidates)
### Authors
* Akira Ito, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Rei Ueno, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Naofumi Homma, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Rei Ueno, PRESTO, Japan Science and Technology Agency, 4–1–8 Honcho, Kawaguchi, Saitama, 332-0012, Japan
* Keita Xagawa, NTT Social Informatics Laboratories, 3-9-11 Midori-cho, Musashino-shi, Tokyo, 180-8585, Japan
* Junko Takahashi, NTT Social Informatics Laboratories, 3-9-11 Midori-cho, Musashino-shi, Tokyo, 180-8585, Japan
* Naofumi Homma, CREST, Japan Science and Technology Agency, 4–1–8 Honcho, Kawaguchi, Saitama, 332-0012, Japan
### Abstract
> We investigate all NIST PQC Round 3 KEM candidates from the viewpoint of fault-injection attacks: Classic McEliece, Kyber, NTRU, Saber, BIKE, FrodoKEM, HQC, NTRU Prime, and SIKE. All KEM schemes use variants of the Fujisaki-Okamoto transformation, so the equality test with re-encryption in decapsulation is critical.
> 
> We survey effective key-recovery attacks when we can skip the equality test. We found the existing key-recovery attacks against Kyber, NTRU, Saber, FrodoKEM, HQC, one of two KEM schemes in NTRU Prime, and SIKE. We propose a new key-recovery attack against the other KEM scheme in NTRU Prime. We also report an attack against BIKE that leads to leakage of information of secret keys.
> 
> The open-source pqm4 library contains all KEM schemes except Classic McEliece and HQC. We show that giving a single instruction-skipping fault in the decapsulation processes leads to skipping the equality test virtually for Kyber, NTRU, Saber, BIKE, and SIKE. We also report the experimental attacks against them. We also report the implementation of NTRU Prime allows chosen-ciphertext attacks freely and the timing side-channel of FrodoKEM reported in Guo, Johansson, and Nilsson (CRYPTO 2020) remains, while there are no such bugs in their NIST PQC Round 3 submissions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_2](https://doi.org/10.1007/978-3-030-92075-3_2)
## Divided We Stand, United We Fall: Security Analysis of Some SCA+SIFA Countermeasures Against SCA-Enhanced Fault Template Attacks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#divided-we-stand-united-we-fall-security-analysis-of-some-sca-sifa-countermeasures-against-sca-enhanced-fault-template-attacks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#divided-we-stand-united-we-fall-security-analysis-of-some-sca-sifa-countermeasures-against-sca-enhanced-fault-template-attacks)
### Authors
* Sayandeep Saha, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Arnab Bag, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Debdeep Mukhopadhyay, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Dirmanto Jap, Temasek Labs, Nanyang Technological University, Singapore, Singapore
* Shivam Bhasin, Temasek Labs, Nanyang Technological University, Singapore, Singapore
### Abstract
> Protection against Side-Channel (SCA) and Fault Attacks (FA) requires two classes of countermeasures to be simultaneously embedded in a cryptographic implementation. It has already been shown that a straightforward combination of SCA and FA countermeasures are vulnerable against FAs, such as Statistical Ineffective Fault Analysis (SIFA) and Fault Template Attacks (FTA). Consequently, new classes of countermeasures have been proposed which prevent against SIFA, and also includes masking for SCA protection. While they are secure against SIFA and SCA individually, one important question is whether the security claim still holds at the presence of a combined SCA and FA adversary. Security against combined attacks is, however, desired, as countermeasures for both threats are included in such implementations.
> 
> In this paper, we show that some of the recently proposed combined SIFA and SCA countermeasures fall prey against combined attacks. To this end, we enhance the FTA attacks by considering side-channel information during fault injection. The success of the proposed attacks stems from some non-trivial fault propagation properties of S-Boxes, which remains unexplored in the original FTA proposal. The proposed attacks are validated on an open-source software implementation of Keccak with SIFA-protected \(\chi _5\) S-Box with laser fault injection and power measurement, and a hardware implementation of a SIFA-protected \(\chi _3\) S-Box through gate-level power trace simulation. Finally, we discuss some mitigation strategies to strengthen existing countermeasures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_3](https://doi.org/10.1007/978-3-030-92075-3_3)
## Efficient Leakage-Resilient MACs Without Idealized Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#efficient-leakage-resilient-macs-without-idealized-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#efficient-leakage-resilient-macs-without-idealized-assumptions)
### Authors
* Francesco Berti, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Thomas Peters, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Francesco Berti, TU Darmstadt, Germany, CAC - Applied Cryptography, Darmstadt, Germany
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
### Abstract
> The security proofs of leakage-resilient MACs based on symmetric building blocks currently rely on idealized assumptions that hardly translate into interpretable guidelines for the cryptographic engineers implementing these schemes. In this paper, we first present a leakage-resilient MAC that is both efficient and secure under standard and easily interpretable black box and physical assumptions. It only requires a collision resistant hash function and a single call per message authentication to a Tweakable Block Cipher (\(\mathsf {TBC}\)) that is unpredictable with leakage. This construction leverages two design twists: large tweaks for the \(\mathsf {TBC}\) and a verification process that checks the inverse \(\mathsf {TBC}\) against a constant. It enjoys beyond birthday security bounds. We then discuss the cost of getting rid of these design twists. We show that security can be proven without them as well. Yet, a construction without large tweaks requires stronger (non idealized) assumptions and may incur performance overheads if specialized \(\mathsf {TBC}\)s with large tweaks can be exploited, and a construction without twisted verification requires even stronger assumptions (still non idealized) and leads to more involved bounds. The combination of these results makes a case for our first pragmatic construction and suggests the design of \(\mathsf {TBC}\)s with large tweaks and good properties for side-channel countermeasures as an interesting challenge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_4](https://doi.org/10.1007/978-3-030-92075-3_4)
## DEFAULT: Cipher Level Resistance Against Differential Fault Attack.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#default-cipher-level-resistance-against-differential-fault-attack)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#default-cipher-level-resistance-against-differential-fault-attack)
### Authors
* Anubhab Baksi, Nanyang Technological University, Singapore, Singapore
* Mustafa Khairallah, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Shivam Bhasin, Temasek Labs NTU, Singapore, Singapore
* Jakub Breier, Silicon Austria Labs, Graz, Austria
* Sumanta Sarkar, University of Warwick, Coventry, UK
* Siang Meng Sim, DSO National Laboratories, Singapore, Singapore
### Abstract
> Differential Fault Analysis (DFA) is a well known cryptanalytic technique that exploits faulty outputs of an encryption device. Despite its popularity and similarity with the classical Differential Analysis (DA), a thorough analysis explaining DFA from a designer’s point-of-view is missing in the literature. To the best of our knowledge, no DFA immune block cipher at an algorithmic level has been proposed so far. Furthermore, all known DFA countermeasures somehow depend on the device/protocol or on the implementation such as duplication/comparison. As all of these are outside the scope of the cipher designer, we focus on designing a primitive which can protect from DFA on its own. We present the first concept of cipher level DFA resistance which does not rely on any device/protocol related assumption, nor does it depend on any form of duplication. Our construction is simple, software/hardware friendly and DFA security scales up with the state size. It can be plugged before and/or after (almost) any symmetric key cipher and will ensure a non-trivial search complexity against DFA. One key component in our DFA protection layer is an SBox with linear structures. Such SBoxes have never been used in cipher design as they generally perform poorly against differential attacks. We argue that they in fact represent an interesting trade-off between good cryptographic properties and DFA resistance. As a proof of concept, we construct a DFA protecting layer, named DEFAULT-LAYER, as well as a full-fledged block cipher DEFAULT. Our solutions compare favorably to the state-of-the-art, offering advantages over the sophisticated duplication based solutions like impeccable circuits/CRAFT or infective countermeasures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_5](https://doi.org/10.1007/978-3-030-92075-3_5)
## Dynamic Random Probing Expansion with Quasi Linear Asymptotic Complexity.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#dynamic-random-probing-expansion-with-quasi-linear-asymptotic-complexity)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#dynamic-random-probing-expansion-with-quasi-linear-asymptotic-complexity)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### Abstract
> The masking countermeasure is widely used to protect cryptographic implementations against side-channel attacks. While many masking schemes are shown to be secure in the widely deployed probing model, the latter raised a number of concerns regarding its relevance in practice. Offering the adversary the knowledge of a fixed number of intermediate variables, it does not capture the so-called horizontal attacks which exploit the repeated manipulation of sensitive variables. Therefore, recent works have focused on the random probing model in which each computed variable leaks with some given probability p. This model benefits from fitting better the reality of the embedded devices. In particular, Belaïd, Coron, Prouff, Rivain, and Taleb (CRYPTO 2020) introduced a framework to generate random probing circuits. Their compiler somehow extends base gadgets as soon as they satisfy a notion called random probing expandability (RPE). A subsequent work from Belaïd, Rivain, and Taleb (EUROCRYPT 2021) went a step forward with tighter properties and improved complexities. In particular, their construction reaches a complexity of \(\mathcal {O}(\kappa ^{3.9})\), for a \(\kappa \)-bit security, while tolerating a leakage probability of \(p=2^{-7.5}\).
> 
> In this paper, we generalize the random probing expansion approach by considering a dynamic choice of the base gadgets at each step in the expansion. This approach makes it possible to use gadgets with high number of shares –which enjoy better asymptotic complexity in the expansion framework– while still tolerating the best leakage rate usually obtained for small gadgets. We investigate strategies for the choice of the sequence of compilers and show that it can reduce the complexity of an AES implementation by a factor 10. We also significantly improve the asymptotic complexity of the expanding compiler by exhibiting new asymptotic gadget constructions. Specifically, we introduce RPE gadgets for linear operations featuring a quasi-linear complexity as well as an RPE multiplication gadget with linear number of multiplications. These new gadgets drop the complexity of the expanding compiler from quadratic to quasi-linear.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_6](https://doi.org/10.1007/978-3-030-92075-3_6)
## Homomorphic Secret Sharing for Multipartite and General Adversary Structures Supporting Parallel Evaluation of Low-Degree Polynomials.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#homomorphic-secret-sharing-for-multipartite-and-general-adversary-structures-supporting-parallel-evaluation-of-low-degree-polynomials)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#homomorphic-secret-sharing-for-multipartite-and-general-adversary-structures-supporting-parallel-evaluation-of-low-degree-polynomials)
### Authors
* Reo Eriguchi, The University of Tokyo, Tokyo, Japan
* Koji Nuida, Kyushu University, Fukuoka, Japan
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
### Abstract
> Homomorphic secret sharing (HSS) for a function f allows input parties to distribute shares for their private inputs and then locally compute output shares from which the value of f is recovered. HSS can be directly used to obtain a two-round multiparty computation (MPC) protocol for possibly non-threshold adversary structures whose communication complexity is independent of the size of f. In this paper, we propose two constructions of HSS schemes supporting parallel evaluation of a single low-degree polynomial and tolerating multipartite and general adversary structures. Our multipartite scheme tolerates a wider class of adversary structures than the previous multipartite one in the particular case of a single evaluation and has exponentially smaller share size than the general construction. While restricting the range of tolerable adversary structures (but still applicable to non-threshold ones), our schemes perform \(\ell \) parallel evaluations with communication complexity approximately \(\ell /\log \ell \) times smaller than simply using \(\ell \) independent instances. We also formalize two classes of adversary structures taking into account real-world situations to which the previous threshold schemes are inapplicable. Our schemes then perform O(m) parallel evaluations with almost the same communication cost as a single evaluation, where m is the number of parties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_7](https://doi.org/10.1007/978-3-030-92075-3_7)
## Improved Single-Round Secure Multiplication Using Regenerating Codes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#improved-single-round-secure-multiplication-using-regenerating-codes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#improved-single-round-secure-multiplication-using-regenerating-codes)
### Authors
* Mark Abspoel, CWI, Amsterdam, Netherlands
* Ronald Cramer, CWI, Amsterdam, Netherlands
* Ronald Cramer, Leiden University, Leiden, Netherlands
* Daniel Escudero, J.P. Morgan AI Research, New York, USA
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> In 2016, Guruswami and Wootters showed Shamir’s secret-sharing scheme defined over an extension field has a regenerating property. Namely, we can compress each share to an element of the base field by applying a linear form, such that the secret is determined by a linear combination of the compressed shares. Immediately it seemed like an application to improve the complexity of unconditionally secure multiparty computation must be imminent; however, thus far, no result has been published.
> 
> We present the first application of regenerating codes to MPC, and show that its utility lies in reducing the number of rounds. Concretely, we present a protocol that obliviously evaluates a depth-d arithmetic circuit in \(d + O(1)\) rounds, in the amortized setting of parallel evaluations, with \(o(n^2)\) ring elements communicated per multiplication. Our protocol makes use of function-dependent preprocessing, and is secure against the maximal adversary corrupting \(t < n/2\) parties. All existing approaches in this setting have complexity \(\varOmega (n^2)\).
> 
> Moreover, we extend some of the theory on regenerating codes to Galois rings. It was already known that the repair property of MDS codes over fields can be fully characterized in terms of its dual code. We show this characterization extends to linear codes over Galois rings, and use it to show the result of Guruswami and Wootters also holds true for Shamir’s scheme over Galois rings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_8](https://doi.org/10.1007/978-3-030-92075-3_8)
## Garbling, Stacked and Staggered - Faster k-out-of-n Garbled Function Evaluation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#garbling-stacked-and-staggered-faster-k-out-of-n-garbled-function-evaluation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#garbling-stacked-and-staggered-faster-k-out-of-n-garbled-function-evaluation)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Stacked Garbling (SGC) is a Garbled Circuit (GC) improvement that efficiently and securely evaluates programs with conditional branching. SGC reduces bandwidth consumption such that communication is proportional to the size of the single longest program execution path, rather than to the size of the entire program. Crucially, the parties expend increased computational effort compared to classic GC.
> 
> Motivated by procuring a subset in a menu of computational services or tasks, we consider GC evaluation of k-out-of-n branches, whose indices are known (or eventually revealed) to the GC evaluator \(E\). Our stack-and-stagger technique amortizes GC computation in this setting. We retain the communication advantage of SGC, while significantly improving computation and wall-clock time. Namely, each GC party garbles (or evaluates) the total of n branches, a significant improvement over the \(O(n\cdot k)\) garblings/evaluations needed by standard SGC. We present our construction as a garbling scheme.
> 
> Our technique brings significant overall performance improvement in various settings, including those typically considered in the literature: e.g. on a 1Gbps LAN we evaluate 16-out-of-128 functions \(\approx 7.68 \times \) faster than standard stacked garbling.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_9](https://doi.org/10.1007/978-3-030-92075-3_9)
## Better Security-Efficiency Trade-Offs in Permutation-Based Two-Party Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#better-security-efficiency-trade-offs-in-permutation-based-two-party-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#better-security-efficiency-trade-offs-in-permutation-based-two-party-computation)
### Authors
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Stefano Tessaro, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
### Abstract
> We improve upon the security of (tweakable) correlation-robust hash functions, which are essential components of garbling schemes and oblivious-transfer extension schemes. We in particular focus on constructions from permutations, and improve upon the work by Guo et al. (IEEE S&P ’20) in terms of security and efficiency.
> 
> We present a tweakable one-call construction which matches the security of the most secure two-call construction – the resulting security bound takes form \(O((p+q)q/2^n)\), where q is the number of construction evaluations and p is the number of direct adversarial queries to the underlying n-bit permutation, which is modeled as random.
> 
> Moreover, we present a new two-call construction with much better security degradation – in particular, for applications of interest, where only a constant number of evaluations per tweak are made, the security degrades as \(O((\sqrt{q} p+q^2)/2^n)\). Our security proof relies on the sum-capture theorems (Babai ’02; Steinberger ’12, Cogliati and Seurin ’18), as well as on new balls-into-bins combinatorial lemmas for limited independence ball-throws.
> 
> Of independent interest, we also provide a self-contained concrete security treatment of oblivious transfer extension.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_10](https://doi.org/10.1007/978-3-030-92075-3_10)
## Two-Round Adaptively Secure MPC from Isogenies, LPN, or CDH.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#two-round-adaptively-secure-mpc-from-isogenies-lpn-or-cdh)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#two-round-adaptively-secure-mpc-from-isogenies-lpn-or-cdh)
### Authors
* Navid Alamati, UC Berkeley and Visa Research, Berkeley, USA
* Hart Montgomery, Fujitsu Research of America, Sunnyvale, USA
* Sikhar Patranabis, ETH Zürich and Visa Research, Zürich, Switzerland
* Pratik Sarkar, Boston University, Boston, USA
### Abstract
> We present a new framework for building round-optimal (two-round) adaptively secure MPC. We show that a relatively weak notion of OT that we call indistinguishability OT with receiver oblivious sampleability (\(\mathsf {r\hbox {-}iOT}\)) is enough to build two-round, adaptively secure MPC against malicious adversaries in the CRS model. We then show how to construct \(\mathsf {r\hbox {-}iOT}\) from CDH, LPN, or isogeny-based assumptions that can be viewed as group actions (such as CSIDH and CSI-FiSh). This yields the first constructions of two-round adaptively secure MPC against malicious adversaries from CDH, LPN, or isogeny-based assumptions. We further extend our non-isogeny results to the plain model, achieving (to our knowledge) the first construction of two-round adaptively secure MPC against semi-honest adversaries in the plain model from LPN.
> 
> Our results allow us to build two-round adaptively secure MPC against malicious adversaries from essentially all of the well-studied assumptions in cryptography. In addition, our constructions from isogenies or LPN provide the first post-quantum alternatives to LWE-based constructions for round-optimal adaptively secure MPC. Along the way, we show that \(\mathsf {r\hbox {-}iOT} \) also implies non-committing encryption (NCE), thereby yielding the first constructions of NCE from isogenies or LPN.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_11](https://doi.org/10.1007/978-3-030-92075-3_11)
## Reverse Firewalls for Adaptively Secure MPC Without Setup.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#reverse-firewalls-for-adaptively-secure-mpc-without-setup)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#reverse-firewalls-for-adaptively-secure-mpc-without-setup)
### Authors
* Suvradip Chakraborty, IST Austria, Klosterneuburg, Austria
* Chaya Ganesh, IISc Bangalore, Bengaluru, India
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Pratik Sarkar, Boston University, Boston, USA
### Abstract
> We study Multi-party computation (MPC) in the setting of subversion, where the adversary tampers with the machines of honest parties. Our goal is to construct actively secure MPC protocols where parties are corrupted adaptively by an adversary (as in the standard adaptive security setting), and in addition, honest parties’ machines are compromised.
> 
> The idea of reverse firewalls (RF) was introduced at EUROCRYPT’15 by Mironov and Stephens-Davidowitz as an approach to protecting protocols against corruption of honest parties’ devices. Intuitively, an RF for a party \(\mathcal {P}\) is an external entity that sits between \(\mathcal {P}\) and the outside world and whose scope is to sanitize \(\mathcal {P}\)’s incoming and outgoing messages in the face of subversion of their computer. Mironov and Stephens-Davidowitz constructed a protocol for passively-secure two-party computation. At CRYPTO’20, Chakraborty, Dziembowski and Nielsen constructed a protocol for secure computation with firewalls that improved on this result, both by extending it to multi-party computation protocol, and considering active security in the presence of static corruptions.
> 
> In this paper, we initiate the study of RF for MPC in the adaptive setting. We put forward a definition for adaptively secure MPC in the reverse firewall setting, explore relationships among the security notions, and then construct reverse firewalls for MPC in this stronger setting of adaptive security. We also resolve the open question of Chakraborty, Dziembowski and Nielsen by removing the need for a trusted setup in constructing RF for MPC.
> 
> Towards this end, we construct reverse firewalls for adaptively secure augmented coin tossing and adaptively secure zero-knowledge protocols and obtain a constant round adaptively secure MPC protocol in the reverse firewall setting without setup. Along the way, we propose a new multi-party adaptively secure coin tossing protocol in the plain model, that is of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_12](https://doi.org/10.1007/978-3-030-92075-3_12)
## On Time-Lock Cryptographic Assumptions in Abelian Hidden-Order Groups.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#on-time-lock-cryptographic-assumptions-in-abelian-hidden-order-groups)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#on-time-lock-cryptographic-assumptions-in-abelian-hidden-order-groups)
### Authors
* Aron van Baarsen, CWI, Cryptology Group, Amsterdam, The Netherlands
* Marc Stevens, CWI, Cryptology Group, Amsterdam, The Netherlands
### Abstract
> In this paper we study cryptographic finite abelian groups of unknown order and hardness assumptions in these groups. Abelian groups necessitate multiple group generators, which may be chosen at random. We formalize this setting and hardness assumptions therein. Furthermore, we generalize the algebraic group model and strong algebraic group model from cyclic groups to arbitrary finite abelian groups of unknown order. Building on these formalizations, we present techniques to deal with this new setting, and prove new reductions. These results are relevant for class groups of imaginary quadratic number fields and time-lock cryptography build upon them.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_13](https://doi.org/10.1007/978-3-030-92075-3_13)
## Astrolabous: A Universally Composable Time-Lock Encryption Scheme.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#astrolabous-a-universally-composable-time-lock-encryption-scheme)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#astrolabous-a-universally-composable-time-lock-encryption-scheme)
### Authors
* Myrto Arapinis, The University of Edinburgh, Edinburgh, UK
* Nikolaos Lamprou, The University of Edinburgh, Edinburgh, UK
* Thomas Zacharias, The University of Edinburgh, Edinburgh, UK
### Abstract
> In this work, we study the Time-Lock Encryption (TLE) cryptographic primitive. The concept of TLE involves a party initiating the encryption of a message that one can only decrypt after a certain amount of time has elapsed. Following the Universal Composability (UC) paradigm introduced by Canetti [IEEE FOCS 2001], we formally abstract the concept of TLE into an ideal functionality. In addition, we provide a standalone definition for secure TLE schemes in a game-based style and we devise a hybrid protocol that relies on such a secure TLE scheme. We show that if the underlying TLE scheme satisfies the standalone game-based security definition, then our hybrid protocol UC realises the TLE functionality in the random oracle model. Finally, we present Astrolabous, a TLE construction that satisfies our security definition, leading to the first UC realization of the TLE functionality.
> 
> Interestingly, it is hard to prove UC secure any of the TLE construction proposed in the literature. The reason behind this difficulty relates to the UC framework itself. Intuitively, to capture semantic security, no information should be leaked regarding the plaintext in the ideal world, thus the ciphertext should not contain any information relating to the message. On the other hand, all ciphertexts will eventually open, resulting in a trivial distinction of the real from the ideal world in the standard model. We overcome this limitation by extending any secure TLE construction adopting the techniques of Nielsen [CRYPTO 2002] in the random oracle model. Specifically, the description of the extended TLE algorithms includes calls to the random oracle, allowing our simulator to equivocate. This extension can be applied to any TLE algorithm that satisfies our standalone game-based security definition, and in particular to Astrolabous.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_14](https://doi.org/10.1007/978-3-030-92075-3_14)
## Identity-Based Encryption for Fair Anonymity Applications: Defining, Implementing, and Applying Rerandomizable RCCA-Secure IBE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#identity-based-encryption-for-fair-anonymity-applications-defining-implementing-and-applying-rerandomizable-rcca-secure-ibe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#identity-based-encryption-for-fair-anonymity-applications-defining-implementing-and-applying-rerandomizable-rcca-secure-ibe)
### Authors
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Baosheng Wang, School of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Computer and Cyber Security, Fujian Normal University, Fuzhou, China
* Jianting Ning, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Computer and Cyber Security, Fujian Normal University, Fuzhou, China
* Jianting Ning, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### Abstract
> Our context is anonymous encryption schemes hiding their receiver, but in a setting which allows authorities to reveal the receiver when needed. While anonymous Identity-Based Encryption (IBE) is a natural candidate for such fair anonymity (it gives trusted authority access by design), the de facto security standard (a.k.a. IND-ID-CCA) is incompatible with the ciphertext rerandomizability which is crucial to anonymous communication. Thus, we seek to extend IND-ID-CCA security for IBE to a notion that can be meaningfully relaxed for rerandomizability while it still protects against active adversaries. To the end, inspired by the notion of replayable adaptive chosen-ciphertext attack (RCCA) security (Canetti et al., Crypto’03), we formalize a new security notion called Anonymous Identity-Based RCCA (ANON-ID-RCCA) security for rerandomizable IBE and propose the first construction with rigorous security analysis. The core of our scheme is a novel extension of the double-strand paradigm, which was originally proposed by Golle et al. (CT-RSA’04) and later extended by Prabhakaran and Rosulek (Crypto’07), to the well-known Gentry-IBE (Eurocrypt’06). Notably, our scheme is the first IBE that simultaneously satisfies adaptive security, rerandomizability, and recipient-anonymity to date. As the application of our new notion, we design a new universal mixnet in the identity-based setting that does not require public key distribution (with fair anonymity). More generally, our new notion is also applicable to most existing rerandomizable RCCA-secure applications to eliminate the need for public key distribution infrastructure while allowing fairness.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_15](https://doi.org/10.1007/978-3-030-92075-3_15)
## Simulation-Based Bi-Selective Opening Security for Public Key Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#simulation-based-bi-selective-opening-security-for-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#simulation-based-bi-selective-opening-security-for-public-key-encryption)
### Authors
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
### Abstract
> Selective opening attacks (SOA) (for public-key encryption, PKE) concern such a multi-user scenario, where an adversary adaptively corrupts some fraction of the users to break into a subset of honestly created ciphertexts, and tries to learn the information on the messages of some unopened (but potentially related) ciphertexts. Until now, the notion of selective opening attacks is only considered in two settings: sender selective opening (SSO), where part of senders are corrupted and messages together with randomness for encryption are revealed; and receiver selective opening (RSO), where part of receivers are corrupted and messages together with secret keys for decryption are revealed.
> 
> In this paper, we consider a more natural and general setting for selective opening security. In the setting, the adversary may adaptively corrupt part of senders and receivers simultaneously, and get the plaintext messages together with internal randomness for encryption and secret keys for decryption, while it is hoped that messages of uncorrupted parties remain protected. We denote it as Bi-SO security since it is reminiscent of Bi-Deniability for PKE.
> 
> We first formalize the requirement of Bi-SO security by the simulation-based (SIM) style, and prove that some practical PKE schemes achieve SIM-Bi-\(\text {SO}\)-CCA security in the random oracle model. Then, we suggest a weak model of Bi-SO security, denoted as SIM-wBi-\(\text {SO}\)-CCA security, and argue that it is still meaningful and useful. We propose a generic construction of PKE schemes that achieve SIM-wBi-\(\text {SO}\)-CCA security in the standard model and instantiate them from various standard assumptions. Our generic construction is built on a newly presented primitive, namely, universal\(_{\kappa }\) hash proof system with key equivocability, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_16](https://doi.org/10.1007/978-3-030-92075-3_16)
## Key Encapsulation Mechanism with Tight Enhanced Security in the Multi-user Setting: Impossibility Result and Optimal Tightness.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#key-encapsulation-mechanism-with-tight-enhanced-security-in-the-multi-user-setting-impossibility-result-and-optimal-tightness)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#key-encapsulation-mechanism-with-tight-enhanced-security-in-the-multi-user-setting-impossibility-result-and-optimal-tightness)
### Authors
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### Abstract
> For Key Encapsulation Mechanism (KEM) deployed in a multi-user setting, an adversary may corrupt some users to learn their secret keys, and obtain some encapsulated keys due to careless key managements of users. To resist such attacks, we formalize Enhanced security against Chosen Plaintext/Ciphertext Attack (ECPA/ECCA), which ask the pseudorandomness of unrevealed encapsulated keys under uncorrupted users. This enhanced security for KEM serves well for the security of a class of Authenticated Key Exchange protocols built from KEM.
> 
> In this paper, we study the achievability of tight ECPA and ECCA security for KEM in the multi-user setting, and present an impossibility result and an optimal security loss factor that can be obtained. The existing meta-reduction technique due to Bader et al. (EUROCRYPT 2016) rules out some KEMs, but many well-known KEMs, e.g., Cramer-Shoup KEM (SIAM J. Comput. 2003), Kurosawa-Desmedt KEM (CRYPTO 2004), run out. To solve this problem, we develop a new technique tool named rank of KEM and a new secret key partitioning strategy for meta-reduction. With this new tool and new strategy, we prove that KEM schemes with polynomially-bounded ranks have no tight ECPA and ECCA security from non-interactive complexity assumptions, and the security loss is at least linear in the number n of users. This impossibility result covers lots of well-known KEMs, including the Cramer-Shoup KEM, Kurosawa-Desmedt KEM and many others. Moreover, we show that the linear security loss is optimal by presenting concrete KEMs with security loss \(\varTheta (n)\). This is justified by a non-trivial security reduction with linear loss factor from ECPA/ECCA security to the traditional multi-challenge CPA/CCA security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_17](https://doi.org/10.1007/978-3-030-92075-3_17)
## Hierarchical Integrated Signature and Encryption - (or: Key Separation vs. Key Reuse: Enjoy the Best of both Worlds).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#hierarchical-integrated-signature-and-encryption-or-key-separation-vs-key-reuse-enjoy-the-best-of-both-worlds)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#hierarchical-integrated-signature-and-encryption-or-key-separation-vs-key-reuse-enjoy-the-best-of-both-worlds)
### Authors
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
* Qiang Tang, School of Computer Science, University of Sydney, Sydney, Australia
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### Abstract
> In this work, we introduce the notion of hierarchical integrated signature and encryption (HISE), wherein a single public key is used for both signature and encryption, and one can derive a secret key used only for decryption from the signing key, which enables secure delegation of decryption capability. HISE enjoys the benefit of key reuse, and admits individual key escrow. We present two generic constructions of HISE. One is from (constrained) identity-based encryption. The other is from uniform one-way function, public-key encryption, and general-purpose public-coin zero-knowledge proof of knowledge. To further attain global key escrow, we take a little detour to revisit global escrow PKE, an object both of independent interest and with many applications. We formalize the syntax and security model of global escrow PKE, and provide two generic constructions. The first embodies a generic approach to compile any PKE into one with global escrow property. The second establishes a connection between three-party non-interactive key exchange and global escrow PKE. Combining the results developed above, we obtain HISE schemes that support both individual and global key escrow.
> 
> We instantiate our generic constructions of (global escrow) HISE and implement all the resulting concrete schemes for 128-bit security. Our schemes have performance that is comparable to the best Cartesian product combined public-key scheme, and exhibit advantages in terms of richer functionality and public key reuse. As a byproduct, we obtain a new global escrow PKE scheme that is 12–30\(\times \) faster than the best prior work, which might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_18](https://doi.org/10.1007/978-3-030-92075-3_18)
## Tardigrade: An Atomic Broadcast Protocol for Arbitrary Network Conditions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#tardigrade-an-atomic-broadcast-protocol-for-arbitrary-network-conditions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#tardigrade-an-atomic-broadcast-protocol-for-arbitrary-network-conditions)
### Authors
* Erica Blum, University of Maryland, College Park, MD, USA
* Jonathan Katz, University of Maryland, College Park, MD, USA
* Julian Loss, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
### Abstract
> We study the problem of atomic broadcast—the underlying problem addressed by blockchain protocols—in the presence of a malicious adversary who corrupts some fraction of the n parties running the protocol. Existing protocols are either robust for any number of corruptions in a synchronous network (where messages are delivered within some known time \(\varDelta \)) but fail if the synchrony assumption is violated, or tolerate fewer than n/3 corrupted parties in an asynchronous network (where messages can be delayed arbitrarily) and cannot tolerate more corruptions even if the network happens to be well behaved.
> 
> We design an atomic broadcast protocol (Tardigrade) that, for any \(t_s \ge t_a\) with \(2t_s + t_a < n\), provides security against \(t_s\) corrupted parties if the network is synchronous, while remaining secure when \(t_a\) parties are corrupted even in an asynchronous network. We show that Tardigrade achieves optimal tradeoffs between \(t_s\) and \(t_a\). Finally, we show a second protocol (upgrade) with similar (but slightly weaker) guarantees that achieves per-transaction communication complexity linear in n.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_19](https://doi.org/10.1007/978-3-030-92075-3_19)
## Onion Routing with Replies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#onion-routing-with-replies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#onion-routing-with-replies)
### Authors
* Christiane Kuhn, Karlsruhe Institute of Technology, KASTEL, Karlsruhe, Germany
* Thorsten Strufe, Karlsruhe Institute of Technology, KASTEL, Karlsruhe, Germany
* Dennis Hofheinz, ETH Zürich, Zürich, Switzerland
* Andy Rupp, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> Onion routing (OR) protocols are a crucial tool for providing anonymous internet communication. An OR protocol enables a user to anonymously send requests to a server. A fundamental problem of OR protocols is how to deal with replies: ideally, we would want the server to be able to send a reply back to the anonymous user without knowing or disclosing the user’s identity.
> 
> Existing OR protocols do allow for such replies, but do not provably protect the payload (i.e., message) of replies against manipulation. Kuhn et al. (IEEE S&P 2020) show that such manipulations can in fact be leveraged to break anonymity of the whole protocol.
> 
> In this work, we close this gap and provide the first framework and protocols for OR with protected replies. We define security in the sense of an ideal functionality in the universal composability model, and provide corresponding (less complex) game-based security notions for the individual properties.
> 
> We also provide two secure instantiations of our framework: one based on updatable encryption, and one based on succinct non-interactive arguments (SNARGs) to authenticate payloads both in requests and replies. In both cases, our central technical handle is an implicit authentication of the transmitted payload data, as opposed to an explicit, but insufficient authentication (with MACs) in previous solutions. Our results exhibit a new and surprising application of updatable encryption outside of long-term data storage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_20](https://doi.org/10.1007/978-3-030-92075-3_20)
## Private Join and Compute from PIR with Default.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#private-join-and-compute-from-pir-with-default)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#private-join-and-compute-from-pir-with-default)
### Authors
* Tancrède Lepoint, Menlo Park, USA
* Sarvar Patel, Google LLC, Menlo Park, USA
* Mariana Raykova, Google LLC, Menlo Park, USA
* Karn Seth, Google LLC, Menlo Park, USA
* Ni Trieu, Arizona State University, Tempe, USA
### Abstract
> The private join and compute (PJC) functionality enables secure computation over data distributed across different databases, and is applicable to a wide range of applications, many of which address settings where the input databases are of significantly different sizes.
> 
> We introduce the notion of private information retrieval (PIR) with default, which enables two-party PJC functionalities in a way that hides the size of the intersection of the two databases and incurs sublinear communication cost in the size of the bigger database. We provide two constructions for this functionality, one of which requires offline linear communication, which can be amortized across queries, and one that provides sublinear cost for each query but relies on more computationally expensive tools. We construct inner-product PJC, which has applications to ads conversion measurement and contact tracing, relying on an extension of PIR with default. We evaluate the efficiency of our constructions, which can enable \(\mathbf {2^{8}}\) PIR with default lookups on a database of size \(\mathbf {2^{25}}\) (or inner-product PJC on databases with such sizes) with the communication of \(\mathbf {44}\) MB, which costs less than \(\mathbf {0.17}\)c. for the client and \(\mathbf {26.48}\)c. for the server.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_21](https://doi.org/10.1007/978-3-030-92075-3_21)
## Generalized Channels from Limited Blockchain Scripts and Adaptor Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#generalized-channels-from-limited-blockchain-scripts-and-adaptor-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#generalized-channels-from-limited-blockchain-scripts-and-adaptor-signatures)
### Authors
* Lukas Aumayr, Technische Universität Wien, Vienna, Austria
* Matteo Maffei, Technische Universität Wien, Vienna, Austria
* Oguzhan Ersoy, Delft University of Technology, Delft, Netherlands
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, ETH Zürich, Zürich, Switzerland
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
### Abstract
> Decentralized and permissionless ledgers offer an inherently low transaction rate, as a result of their consensus protocol demanding the storage of each transaction on-chain. A prominent proposal to tackle this scalability issue is to utilize off-chain protocols, where parties only need to post a limited number of transactions on-chain. Existing solutions can roughly be categorized into: (i) application-specific channels (e.g., payment channels), offering strictly weaker functionality than the underlying blockchain; and (ii) state channels, supporting arbitrary smart contracts at the cost of being compatible only with the few blockchains having Turing-complete scripting languages (e.g., Ethereum).
> 
> In this work, we introduce and formalize the notion of generalized channels allowing users to perform any operation supported by the underlying blockchain in an off-chain manner. Generalized channels thus extend the functionality of payment channels and relax the definition of state channels. We present a concrete construction compatible with any blockchain supporting transaction authorization, time-locks and constant number of Boolean \(\wedge \) and \(\vee \) operations – requirements fulfilled by many (non-Turing-complete) blockchains including the popular Bitcoin. To this end, we leverage adaptor signatures – a cryptographic primitive already used in the cryptocurrency literature but formalized as a standalone primitive in this work for the first time. We formally prove the security of our generalized channel construction in the Universal Composability framework.
> 
> As an important practical contribution, our generalized channel construction outperforms the state-of-the-art payment channel construction, the Lightning Network, in efficiency. Concretely, it halves the off-chain communication complexity and reduces the on-chain footprint in case of disputes from linear to constant in the number of off-chain applications funded by the channel. Finally, we evaluate the practicality of our construction via a prototype implementation and discuss various applications including financially secured fair two-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_22](https://doi.org/10.1007/978-3-030-92075-3_22)
## ConTra Corona: Contact Tracing against the Coronavirus by Bridging the Centralized-Decentralized Divide for Stronger Privacy.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#contra-corona-contact-tracing-against-the-coronavirus-by-bridging-the-centralized-decentralized-divide-for-stronger-privacy)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#contra-corona-contact-tracing-against-the-coronavirus-by-bridging-the-centralized-decentralized-divide-for-stronger-privacy)
### Authors
* Wasilij Beskorovajnov, FZI Research Center for Information Technology, Karlsruhe, Germany
* Felix Dörre, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Gunnar Hartung, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Alexander Koch, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Jörn Müller-Quade, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Thorsten Strufe, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
### Abstract
> Contact tracing is among the most important interventions to mitigate the spread of any pandemic, usually in the form of manual contact tracing. Smartphone-facilitated digital contact tracing may help to increase tracing capabilities and extend the coverage to those contacts one does not know in person. Most implemented protocols use local Bluetooth Low Energy (BLE) communication to detect contagion-relevant proximity, together with cryptographic protections, as necessary to improve the privacy of the users of such a system. However, current decentralized protocols, including DP3T [T+20], do not sufficiently protect infected users from having their status revealed to their contacts, which raises fear of stigmatization.
> 
> We alleviate this by proposing a new and practical solution with stronger privacy guarantees against active adversaries. It is based on the upload-what-you-observed paradigm, includes a separation of duties on the server side, and a mechanism to ensure that users cannot deduce which encounter caused a warning with high time resolution. Finally, we present a simulation-based security notion of digital contact tracing in the real–ideal setting, and prove the security of our protocol in this framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_23](https://doi.org/10.1007/978-3-030-92075-3_23)
## Cryptographic Analysis of the Bluetooth Secure Connection Protocol Suite.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#cryptographic-analysis-of-the-bluetooth-secure-connection-protocol-suite)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#cryptographic-analysis-of-the-bluetooth-secure-connection-protocol-suite)
### Authors
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Olga Sanina, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> We give a cryptographic analysis of the Bluetooth Secure Connections Protocol Suite. Bluetooth supports several subprotocols, such as Numeric Comparison, Passkey Entry, and Just Works, in order to match the devices’ different input/output capabilities. Previous analyses (e.g., Lindell, CT-RSA’09, or Troncoso and Hale, NDSS’21) often considered (and confirmed) the security of single subprotocols only. Recent practically verified attacks, however, such as the Method Confusion Attack (von Tschirschnitz et al., S&P 21), against Bluetooth’s authentication and key secrecy property often exploit the bad interplay of different subprotocols. Even worse, some of these attacks demonstrate that one cannot prove the Bluetooth protocol suite to be a secure authenticated key exchange protocol. We therefore aim at the best we can hope for and show that the protocol still matches the common key secrecy requirements of a key-exchange protocol if one assumes a trust-on-first-use (TOFU) relationship. This means that the adversary needs to mount an active attack during the initial connection, otherwise the subsequent reconnections remain secure. Investigating the cryptographic strength of the Bluetooth protocol, we also look into the privacy mechanism of address randomization in Bluetooth (which is only available in the Low Energy version). We show that the cryptography indeed provides a decent level of address privacy, although this does not rule out identification of devices via other means, such as physical characteristics.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_24](https://doi.org/10.1007/978-3-030-92075-3_24)
