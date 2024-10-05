# Eurocrypt[2024-7]
## Practical Attack on All Parameters of the DME Signature Scheme.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#practical-attack-on-all-parameters-of-the-dme-signature-scheme)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#practical-attack-on-all-parameters-of-the-dme-signature-scheme)
### Authors
* Pierre Briaud, Sorbonne Université, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Maxime Bros, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Ray Perlner, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Daniel Smith-Tone, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Daniel Smith-Tone, University of Louisville, Louisville, KY, USA
### Abstract
> DME is a multivariate scheme submitted to the call for additional signatures recently launched by NIST. Its performance is one of the best among all the candidates. The public key is constructed from the alternation of very structured linear and non-linear components that constitute the private key, the latter being defined over an extension field. We exploit these structures by proposing an algebraic attack which is practical on all DME parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_1](https://doi.org/10.1007/978-3-031-58754-2_1)
## Signatures with Memory-Tight Security in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#signatures-with-memory-tight-security-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#signatures-with-memory-tight-security-in-the-quantum-random-oracle-model)
### Authors
* Keita Xagawa, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
### Abstract
> Memory tightness of reductions in cryptography, in addition to the standard tightness related to advantage and running time, is important when the underlying problem can be solved efficiently with large memory, as discussed in Auerbach, Cash, Fersch, and Kiltz (CRYPTO 2017). Diemert, Gellert, Jager, and Lyu (ASIACRYPT 2021) and Ghoshal, Ghosal, Jaeger, and Tessaro (EUROCRYPT 2022) gave memory-tight proofs for the multi-challenge security of digital signatures in the random oracle model.
> 
> This paper studies the memory-tight reductions for post-quantum signature schemes in the quantum random oracle model. Concretely, we show that signature schemes from lossy identification are multi-challenge secure in the quantum random oracle model via memory-tight reductions. Moreover, we show that the signature schemes from lossy identification achieve more enhanced securities considering quantum signing oracles proposed by Boneh and Zhandry (CRYPTO 2013) and Alagic, Majenz, Russel, and Song (EUROCRYPT 2020). We additionally show that signature schemes from preimage-sampleable functions achieve those securities via memory-tight reductions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_2](https://doi.org/10.1007/978-3-031-58754-2_2)
## Key Exchange with Tight (Full) Forward Secrecy via Key Confirmation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#key-exchange-with-tight-full-forward-secrecy-via-key-confirmation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#key-exchange-with-tight-full-forward-secrecy-via-key-confirmation)
### Authors
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Doreen Riepel, University of California San Diego, La Jolla, USA
* Runzhi Zeng, Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> Weak forward secrecy (wFS) of authenticated key exchange (AKE) protocols is a passive variant of (full) forward secrecy (FS). A natural mechanism to upgrade from wFS to FS is the use of key confirmation messages which compute a message authentication code (MAC) over the transcript. Unfortunately, Gellert, Gjøsteen, Jacobson and Jager (GGJJ, CRYPTO 2023) show that this mechanism inherently incurs a loss proportional to the number of users, leading to an overall non-tight reduction, even if wFS was established using a tight reduction.
> 
> Inspired by GGJJ, we propose a new notion, called one-way verifiable weak forward secrecy (OW-VwFS), and prove that OW-VwFS can be transformed tightly to FS using key confirmation in the random oracle model (ROM). To implement our generic transformation, we show that several tightly wFS AKE protocols additionally satisfy our OW-VwFS notion tightly. We highlight that using the recent lattice-based protocol from Pan, Wagner, and Zeng (CRYPTO 2023) can give us the first lattice-based tightly FS AKE via key confirmation in the classical random oracle model. Besides this, we also obtain a Decisional-Diffie-Hellman-based protocol that is considerably more efficient than the previous ones.
> 
> Finally, we lift our study on FS via key confirmation to the quantum random oracle model (QROM). While our security reduction is overall non-tight, it matches the best existing bound for wFS in the QROM (Pan, Wagner, and Zeng, ASIACRYPT 2023), namely, it is square-root- and session-tight. Our analysis is in the multi-challenge setting, and it is more realistic than the single-challenge setting as in Pan et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_3](https://doi.org/10.1007/978-3-031-58754-2_3)
## SLAP: Succinct Lattice-Based Polynomial Commitments from Standard Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#slap-succinct-lattice-based-polynomial-commitments-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#slap-succinct-lattice-based-polynomial-commitments-from-standard-assumptions)
### Authors
* Martin R. Albrecht, King’s College London and SandboxAQ, London, UK
* Giacomo Fenzi, EPFL, Lausanne, Switzerland
* Oleksandra Lapiha, Royal Holloway, University of London, London, UK
* Ngoc Khanh Nguyen, King’s College London, London, UK
### Abstract
> Recent works on lattice-based extractable polynomial commitments can be grouped into two classes: (i) non-interactive constructions that stem from the functional commitment by Albrecht, Cini, Lai, Malavolta and Thyagarajan (CRYPTO 2022), and (ii) lattice adaptations of the Bulletproofs protocol (S &P 2018). The former class enjoys security in the standard model, albeit a knowledge assumption is desired. In contrast, Bulletproof-like protocols can be made secure under falsifiable assumptions, but due to technical limitations regarding subtractive sets, they only offer inverse-polynomial soundness error. This issue becomes particularly problematic when transforming these protocols to the non-interactive setting using the Fiat-Shamir paradigm.
> 
> In this work, we propose the first lattice-based non-interactive extractable polynomial commitment scheme which achieves polylogarithmic proof size and verifier runtime (in the length of the committed message) under standard assumptions in the random oracle model. At the core of our work lies a new tree-based commitment scheme, along with an efficient proof of polynomial evaluation inspired by FRI (ICALP 2018). Natively, the interactive version of the construction is secure under a “multi-instance version” of the Power-Ring BASIS assumption (Eprint 2023/846). We then base security on the Module-SIS assumption by introducing several re-randomisation techniques which can be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_4](https://doi.org/10.1007/978-3-031-58754-2_4)
## Universal Composable Password Authenticated Key Exchange for the Post-Quantum World.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#universal-composable-password-authenticated-key-exchange-for-the-post-quantum-world)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#universal-composable-password-authenticated-key-exchange-for-the-post-quantum-world)
### Authors
* You Lyu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* You Lyu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
### Abstract
> In this paper, we construct the first password authenticated key exchange (PAKE) scheme from isogenies with Universal Composable (UC) security in the random oracle model (ROM). We also construct the first two PAKE schemes with UC security in the quantum random oracle model (QROM), one is based on the learning with error (LWE) assumption, and the other is based on the group-action decisional Diffie-Hellman (GA-DDH) assumption in the isogeny setting.
> 
> To obtain our UC-secure PAKE scheme in ROM, we propose a generic construction of PAKE from basic lossy public key encryption (LPKE) and CCA-secure PKE. We also introduce a new variant of LPKE, named extractable LPKE (eLPKE). By replacing the basic LPKE with eLPKE, our generic construction of PAKE achieves UC security in QROM. The LPKE and eLPKE have instantiations not only from LWE but also from GA-DDH, which admit four specific PAKE schemes with UC security in ROM or QROM, based on LWE or GA-DDH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_5](https://doi.org/10.1007/978-3-031-58754-2_5)
## Asymptotics and Improvements of Sieving for Codes.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#asymptotics-and-improvements-of-sieving-for-codes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#asymptotics-and-improvements-of-sieving-for-codes)
### Authors
* Léo Ducas, Centrum Wiskunde & Informatica, Amsterdam, Netherlands
* Léo Ducas, Leiden University, Leiden, Netherlands
* Simona Etinski, Leiden University, Leiden, Netherlands
* Andre Esser, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Elena Kirshanova, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Elena Kirshanova, Immanuel Kant Baltic Federal University, Kaliningrad, Russia
### Abstract
> A recent work of Guo, Johansson, and Nguyen (Eprint’23) proposes a promising adaptation of sieving techniques from lattices to codes, in particular claiming concrete cryptanalytic improvements on various schemes. The core of their algorithm reduces to a Near Neighbor Search (NNS) problem, for which they devise an ad-hoc approach. In this work, we aim for a better theoretical understanding of this approach. First we provide an asymptotic analysis which is not present in the original paper. Second, we propose a more systematic use of known NNS machinery, namely Locality Sensitive Hashing and Filtering (LSH/F), an approach that has been applied very successfully in the case of sieving over lattices. We establish the first baseline for the sieving approach with a decoding complexity of \(2^{0.117n}\) for the conventional worst parameters (full distance decoding, complexity maximized over all code rates). Our cumulative improvements, eventually enable us to lower the hardest parameter decoding complexity for SievingISD algorithms to \(2^{0.101n}\). While this outperforms the BJMM algorithm (Eurocrypt’12) it falls yet behind the most advanced conventional ISD approach by Both and May (PQCrypto’18). As for lattices, we found the Random-Spherical-Code-Product (RPC) gives the best asymptotic complexity. Moreover, we also consider an alternative that seems specific to the Hamming Sphere, which we believe could be of practical interest, as they plausibly hide less sub-exponential overheads than RPC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_6](https://doi.org/10.1007/978-3-031-58754-2_6)
## Isogeny Problems with Level Structure.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#isogeny-problems-with-level-structure)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#isogeny-problems-with-level-structure)
### Authors
* Luca De Feo, IBM Research Europe, Zurich, Switzerland
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
* Lorenz Panny, Technische Universität München, Munich, Germany
### Abstract
> Given two elliptic curves and the degree of an isogeny between them, finding the isogeny is believed to be a difficult problem—upon which rests the security of nearly any isogeny-based scheme. If, however, to the data above we add information about the behavior of the isogeny on a large enough subgroup, the problem can become easy, as recent cryptanalyses on SIDH have shown.
> 
> Between the restriction of the isogeny to a full N-torsion subgroup and no “torsion information” at all lies a spectrum of interesting intermediate problems, raising the question of how easy or hard each of them is. Here we explore modular isogeny problems where the torsion information is masked by the action of a group of \(2\times 2\) matrices. We give reductions between these problems, classify them by their difficulty, and link them to security assumptions found in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_7](https://doi.org/10.1007/978-3-031-58754-2_7)
## Key Recovery Attack on the Partial Vandermonde Knapsack Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#key-recovery-attack-on-the-partial-vandermonde-knapsack-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#key-recovery-attack-on-the-partial-vandermonde-knapsack-problem)
### Authors
* Dipayan Das, NTT Social Informatics Laboratories, Tokyo, Japan
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The Partial Vandermonde \((\textsf{PV})\) Knapsack problem is an algebraic variant of the low-density inhomogeneous \(\textsf{SIS}\) problem. The problem has been used as a building block for various lattice-based constructions, including signatures (ACNS’14, ACISP’18), encryptions (DCC’15,DCC’20), and signature aggregation (Eprint’20). At Crypto’22, Boudgoust, Gachon, and Pellet-Mary proposed a key distinguishing attack on the \(\textsf{PV}\) Knapsack exploiting algebraic properties of the problem. Unfortunately, their attack doesn’t offer key recovery, except for worst-case keys.
> 
> In this paper, we propose an alternative attack on the \(\textsf{PV}\) Knapsack problem which provides key recovery for a much larger set of keys. Like the Crypto’22 attack, it is based on lattice reduction and uses a dimension reduction technique to speed-up the underlying lattice reduction algorithm and enhance its performance. As a side bonus, our attack transforms the \(\textsf{PV}\) Knapsack problem into \(\textsf{uSVP}\) instances instead of \(\textsf{SVP}\) instances in the Crypto’22 attack. This also helps the lattice reduction algorithm, both from a theoretical and practical point of view.
> 
> We use our attack to re-assess the hardness of the concrete parameters used in the literature. It appears that many contain a non-negligible fraction of weak keys, which are easily identified and extremely susceptible to our attack. For example, a fraction of \(2^{-19}\) of the public keys of a parameter set from ACISP’18 can be solved in about 30 hours on a moderate server using off-the-shelf lattice reduction. This parameter set was initially claimed to have a 129-bit security against key recovery attack. Its security was reduced to 87-bit security using the distinguishing attack from Crypto’22. Similarly, the ACNS’14 proposal also includes a parameter set containing a fraction of \(2^{-19}\) of weak keys; those can be solved in about 17 hours.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_8](https://doi.org/10.1007/978-3-031-58754-2_8)
## Cryptanalysis of Rank-2 Module-LIP in Totally Real Number Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#cryptanalysis-of-rank-2-module-lip-in-totally-real-number-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#cryptanalysis-of-rank-2-module-lip-in-totally-real-number-fields)
### Authors
* Guilhem Mureau, Univ Bordeaux, CNRS, Inria, Bordeaux INP, IMB, UMR 5251, Talence, France
* Alice Pellet-Mary, Univ Bordeaux, CNRS, Inria, Bordeaux INP, IMB, UMR 5251, Talence, France
* Georgii Pliatsok, Insitute of Mathematics, NAS of Ukraine, Kyiv, Ukraine
* Georgii Pliatsok, Univ Rennes, Inria, CNRS, Irisa, UMR 6074, Rennes, France
* Alexandre Wallet, Univ Rennes, Inria, CNRS, Irisa, UMR 6074, Rennes, France
### Abstract
> We formally define the Lattice Isomorphism Problem for module lattices (module-LIP) in a number field K. This is a generalization of the problem defined by Ducas, Postlethwaite, Pulles, and van Woerden (Asiacrypt 2022), taking into account the arithmetic and algebraic specificity of module lattices from their representation using pseudo-bases. We also provide the corresponding set of algorithmic and theoretical tools for the future study of this problem in a module setting. Our main contribution is an algorithm solving module-LIP for modules of rank 2 in \(K^2\), when K is a totally real number field. Our algorithm exploits the connection between this problem, relative norm equations and the decomposition of algebraic integers as sums of two squares. For a large class of modules (including \(\mathcal {O}_K^2\)), and a large class of totally real number fields (including the maximal real subfield of cyclotomic fields) it runs in classical polynomial time in the degree of the field and the residue at 1 of the Dedekind zeta function of the field (under reasonable number theoretic assumptions). We provide a proof-of-concept code running over the maximal real subfield of cyclotomic fields.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_9](https://doi.org/10.1007/978-3-031-58754-2_9)
## Provable Dual Attacks on Learning with Errors.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#provable-dual-attacks-on-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#provable-dual-attacks-on-learning-with-errors)
### Authors
* Amaury Pouly, Centre National de la Recherche Scientifique (CNRS), Paris, France
* Yixin Shen, King’s College London, London, UK
### Abstract
> Learning with Errors (LWE) is an important problem for post-quantum cryptography (PQC) that underlines the security of several NIST PQC selected algorithms. Several recent papers [7, 25, 16, 32] have claimed improvements on the complexity of so-called dual attacks on LWE. These improvements make dual attacks comparable to or even better than primal attacks in certain parameter regimes. Unfortunately, those improvements rely on a number of untested and hard-to-test statistical assumptions. Furthermore, a recent paper [20] claims that the whole premise of those improvements might be incorrect.
> 
> The goal of this paper is to improve the situation by proving the correctness of a dual attack without relying on any statistical assumption. Although our attack is greatly simplified compared to the recent ones, it shares many important technical elements with those attacks and can serve as a basis for the analysis of more advanced attacks. We provide some rough estimates on the complexity of our simplified attack on Kyber using a Monte Carlo Markov Chain discrete Gaussian sampler.
> 
> Our main contribution is to clearly identify a set of parameters under which our attack (and presumably other recent dual attacks) can work. Furthermore, our analysis completely departs from the existing statistics-based analysis and is instead rooted in geometry. We also compare the regime in which our algorithm works to the “contradictory regime” of [20]. We observe that those two regimes are essentially complementary.
> 
> Finally, we give a quantum version of our algorithm to speed up the computation. The algorithm is inspired by [10] but is completely formal and does not rely on any heuristics.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_10](https://doi.org/10.1007/978-3-031-58754-2_10)
## Reduction from Sparse LPN to LPN, Dual Attack 3.0.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#reduction-from-sparse-lpn-to-lpn-dual-attack-3-0)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#reduction-from-sparse-lpn-to-lpn-dual-attack-3-0)
### Authors
* Kévin Carrier, ETIS UMR 8051, CY Cergy-Paris Université, ENSEA, CNRS, Cergy, France
* Thomas Debris-Alazard, Project GRACE, Inria Saclay-Ile de France, Palaiseau, France
* Charles Meyer-Hilfiger, Project COSMIQ, Inria de Paris, Paris, France
* Jean-Pierre Tillich, Project COSMIQ, Inria de Paris, Paris, France
### Abstract
> The security of code-based cryptography relies primarily on the hardness of decoding generic linear codes. Until very recently, all the best algorithms for solving the decoding problem were information set decoders (\(\textsf{ISD}\)). However, recently a new algorithm called \(\textsf{RLPN}\)-decoding which relies on a completely different approach was introduced and it has been shown that \(\textsf{RLPN}\) outperforms significantly \(\textsf{ISD}\) decoders for a rather large range of rates. This \(\textsf{RLPN}\) decoder relies on two ingredients, first reducing decoding to some underlying \(\textsf{LPN}\) problem, and then computing efficiently many parity-checks of small weight when restricted to some positions. We revisit \(\textsf{RLPN}\)-decoding by noticing that, in this algorithm, decoding is in fact reduced to a sparse-\(\textsf{LPN}\) problem, namely with a secret whose Hamming weight is small. Our new approach consists this time in making an additional reduction from sparse-\(\textsf{LPN}\) to plain-\(\textsf{LPN}\) with a coding approach inspired by \(\textsf{coded}\)-\(\textsf{BKW}\). It outperforms significantly the \(\textsf{ISD}\)’s and \(\textsf{RLPN}\) for code rates smaller than \(0.42\). This algorithm can be viewed as the code-based cryptography cousin of recent dual attacks in lattice-based cryptography. We depart completely from the traditional analysis of this kind of algorithm which uses a certain number of independence assumptions that have been strongly questioned recently in the latter domain. We give instead a formula for the \(\textsf{LPN}\) noise relying on duality which allows to analyze the behavior of the algorithm by relying only on the analysis of a certain weight distribution. By using only a minimal assumption whose validity has been verified experimentally we are able to justify the correctness of our algorithm. This key tool, namely the duality formula, can be readily adapted to the lattice setting and is shown to give a simple explanation for some phenomena observed on dual attacks in lattices in [19].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_11](https://doi.org/10.1007/978-3-031-58754-2_11)
## Plover: Masking-Friendly Hash-and-Sign Lattice Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#plover-masking-friendly-hash-and-sign-lattice-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#plover-masking-friendly-hash-and-sign-lattice-signatures)
### Authors
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Amin Sakzad, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Thomas Espitau, PQShield SAS, Paris, France
* Guilhem Niot, PQShield SAS, Paris, France
* Thomas Prest, PQShield SAS, Paris, France
### Abstract
> We introduce a toolkit for transforming lattice-based hash-and-sign signature schemes into masking-friendly signatures secure in the t-probing model. Until now, efficiently masking lattice-based hash-and-sign schemes has been an open problem, with unsuccessful attempts such as Mitaka. A first breakthrough was made in 2023 with the NIST PQC submission Raccoon, although it was not formally proven.
> 
> Our main conceptual contribution is to realize that the same principles underlying Raccoon are very generic, and to find a systematic way to apply them within the hash-and-sign paradigm. Our main technical contribution is to formalize, prove, instantiate and implement a hash-and-sign scheme based on these techniques. Our toolkit includes noise flooding to mitigate statistical leaks, and an extended Strong Non-Interfering probing security (\(\textsf{SNIu} \)) property to handle masked gadgets with unshared inputs.
> 
> We showcase the efficiency of our techniques in a signature scheme, \(\mathsf {\mathsf {\textsf{Plover}} \text {-}\mathsf {\textsf{RLWE}} }\), based on (hint) Ring-LWE. It is the first lattice-based masked hash-and-sign scheme with quasi-linear complexity \(O(d \log d)\) in the number of shares d. Our performances are competitive with the state-of-the-art masking-friendly signature, the Fiat-Shamir scheme \(\textsf{Raccoon}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_12](https://doi.org/10.1007/978-3-031-58754-2_12)
## Updatable Public-Key Encryption, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#updatable-public-key-encryption-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#updatable-public-key-encryption-revisited)
### Authors
* Joël Alwen, AWS Wickr, New York, USA
* Marta Mularczyk, AWS Wickr, New York, USA
* Georg Fuchsbauer, TU Wien, Vienna, Austria
### Abstract
> We revisit Updatable Public-Key Encryption (UPKE), which was introduced as a practical mechanism for building forward-secure cryptographic protocols. We begin by observing that all UPKE notions to date are neither syntactically flexible nor secure enough for the most important multi-party protocols motivating UPKE. We provide an intuitive taxonomy of UPKE properties – some partially or completely overlooked in the past – along with an overview of known (explicit and implicit) UPKE constructions. We then introduce a formal UPKE definition capturing all intuitive properties needed for multi-party protocols.
> 
> Next, we provide a practical pairing-based construction for which we provide concrete bounds under a standard assumption in the random oracle and the algebraic group model. The efficiency profile of the scheme compares very favorably with existing UPKE constructions (despite the added flexibility and stronger security). For example, when used to improve the forward security of the Messaging Layer Security protocol [RFC9420], our new UPKE construction requires less than \(1.5\%\) of the bandwidth of the next-most efficient UPKE construction satisfying the strongest UPKE notion considered so far.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_13](https://doi.org/10.1007/978-3-031-58754-2_13)
