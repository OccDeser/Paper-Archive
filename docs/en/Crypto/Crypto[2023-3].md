# Crypto[2023-3]
## Fast Practical Lattice Reduction Through Iterated Compression.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression)
### Authors
* Keegan Ryan, University of California, San Diego, La Jolla, USA
* Nadia Heninger, University of California, San Diego, La Jolla, USA
### Abstract
> We introduce a new lattice basis reduction algorithm with approximation guarantees analogous to the LLL algorithm and practical performance that far exceeds the current state of the art. We achieve these results by iteratively applying precision management techniques within a recursive algorithm structure and show the stability of this approach. We analyze the asymptotic behavior of our algorithm, and show that the heuristic running time is \(O(n^{\omega }(C+n)^{1+\varepsilon })\) for lattices of dimension n, \(\omega \in (2,3]\) bounding the cost of size reduction, matrix multiplication, and QR factorization, and C bounding the log of the condition number of the input basis B. This yields a running time of \(O\left( n^\omega (p + n)^{1 + \varepsilon }\right) \) for precision \(p = O(\log \Vert B\Vert _{max})\) in common applications. Our algorithm is fully practical, and we have published our implementation. We experimentally validate our heuristic, give extensive benchmarks against numerous classes of cryptographic lattices, and show that our algorithm significantly outperforms existing implementations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_1](https://doi.org/10.1007/978-3-031-38548-3_1)
## Does the Dual-Sieve Attack on Learning with Errors Even Work?
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work)
### Authors
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ludo N. Pulles, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### Abstract
> Guo and Johansson (ASIACRYPT 2021), and MATZOV (tech. report 2022) have independently claimed improved attacks against various NIST lattice candidates by adding a Fast Fourier Transform (FFT) trick on top of the so-called Dual-Sieve attack. Recently, there was more follow up work in this line adding new practical improvements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_2](https://doi.org/10.1007/978-3-031-38548-3_2)
## Exploring Decryption Failures of BIKE: New Class of Weak Keys and Key Recovery Attacks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#exploring-decryption-failures-of-bike-new-class-of-weak-keys-and-key-recovery-attacks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#exploring-decryption-failures-of-bike-new-class-of-weak-keys-and-key-recovery-attacks)
### Authors
* Tianrui Wang, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### Abstract
> Code-based cryptography has received a lot of attention recently because it is considered secure under quantum computing. Among them, the QC-MDPC based scheme is one of the most promising due to its excellent performance. QC-MDPC based schemes are usually subject to a small rate of decryption failure, which can leak information about the secret key. This raises two crucial problems: how to accurately estimate the decryption failure rate and how to use the failure information to recover the secret key. However, the two problems are challenging due to the difficulty of geometrically characterizing the bit-flipping decoder employed in QC-MDPC, such as using decoding radius.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_3](https://doi.org/10.1007/978-3-031-38548-3_3)
## Graph-Theoretic Algorithms for the Alternating Trilinear Form Equivalence Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem)
### Authors
* Ward Beullens, IBM Research, Zurich, Switzerland
### Abstract
> At Eurocrypt’22 Tang, Duong, Joux, Plantard, Qiao, and Susilo proposed a digital signature algorithm based on the hardness of the isomorphism problem of alternating trilinear forms. They propose three concrete parameters in dimensions 9, 10, and 11 respectively. We give new heuristic algorithms that solve this problem more efficiently. With our new algorithms, the first parameter set can be broken in less than a day on a laptop. For the second parameter set, we show there is a \(2^{-17}\) fraction of the public keys that can also be broken in less than a day. We do not break the third parameter set in practice, but we claim it falls short of the target security level of 128 bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_4](https://doi.org/10.1007/978-3-031-38548-3_4)
## Analysis of the Security of the PSSI Problem and Cryptanalysis of the Durandal Signature Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme)
### Authors
* Nicolas Aragon, Naquidis Center, Talence, France
* Victor Dyseryn, XLIM, Université de Limoges, Limoges, France
* Philippe Gaborit, XLIM, Université de Limoges, Limoges, France
### Abstract
> We present a new attack against the PSSI problem, one of the three problems at the root of security of Durandal, an efficient rank metric code-based signature scheme with a public key size of 15 kB and a signature size of 4 kB, presented at EUROCRYPT’19. Our attack recovers the private key using a leakage of information coming from several signatures produced with the same key. Our approach is to combine pairs of signatures and perform Cramer-like formulas in order to build subspaces containing a secret element. We break all existing parameters of Durandal: the two published sets of parameters claiming a security of 128 bits are broken in respectively \(2^{66}\) and \(2^{73}\) elementary bit operations, and the number of signatures required to finalize the attack is 1,792 and 4,096 respectively. We implemented our attack and ran experiments that demonstrated its success with smaller parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_5](https://doi.org/10.1007/978-3-031-38548-3_5)
## Finding Short Integer Solutions When the Modulus Is Small.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#finding-short-integer-solutions-when-the-modulus-is-small)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#finding-short-integer-solutions-when-the-modulus-is-small)
### Authors
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Eamonn W. Postlethwaite, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Espitau, PQShield, Paris, France
### Abstract
> We present cryptanalysis of the inhomogenous short integer solution (\(\textsf{ISIS}_{}\)) problem for anomalously small moduli \(q\) by exploiting the geometry of BKZ reduced bases of q-ary lattices.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_6](https://doi.org/10.1007/978-3-031-38548-3_6)
## Practical-Time Related-Key Attack on GOST with Secret S-Boxes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes)
### Authors
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizmann, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> The block cipher GOST 28147-89 was the Russian Federation encryption standard for over 20 years, and is still one of its two standard block ciphers. GOST is a 32-round Feistel construction, whose security benefits from the fact that the S-boxes used in the design are kept secret. In the last 10 years, several attacks on the full 32-round GOST were presented. However, they all assume that the S-boxes are known. When the S-boxes are secret, all published attacks either target a small number of rounds, or apply for small sets of weak keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_7](https://doi.org/10.1007/978-3-031-38548-3_7)
## On Perfect Linear Approximations and Differentials over Two-Round SPNs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#on-perfect-linear-approximations-and-differentials-over-two-round-spns)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#on-perfect-linear-approximations-and-differentials-over-two-round-spns)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### Abstract
> Recent constructions of (tweakable) block ciphers with an embedded cryptographic backdoor relied on the existence of probability-one differentials or perfect (non-)linear approximations over a reduced-round version of the primitive. In this work, we study how the existence of probability-one differentials or perfect linear approximations over two rounds of a substitution-permutation network can be avoided by design. More precisely, we develop criteria on the s-box and the linear layer that guarantee the absence of probability-one differentials for all keys. We further present an algorithm that allows to efficiently exclude the existence of keys for which there exists a perfect linear approximation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_8](https://doi.org/10.1007/978-3-031-38548-3_8)
## Differential Meet-In-The-Middle Cryptanalysis.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#differential-meet-in-the-middle-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#differential-meet-in-the-middle-cryptanalysis)
### Authors
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
### Abstract
> In this paper we introduce the differential meet-in-the-middle framework, a new cryptanalysis technique for symmetric primitives. Our new cryptanalysis method combines techniques from both meet-in-the-middle and differential cryptanalysis. As such, the introduced technique can be seen as a way of extending meet-in-the-middle attacks and their variants but also as a new way to perform the key recovery part in differential attacks. We apply our approach to SKINNY-128-384 in the single-key model and to AES-256 in the related-key model. Our attack on SKINNY-128-384 permits to break 25 out of the 56 rounds of this variant and improves by two rounds the previous best known attacks. For AES-256 we attack 12 rounds by considering two related keys, thus outperforming the previous best related-key attack on AES-256 with only two related keys by 2 rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_9](https://doi.org/10.1007/978-3-031-38548-3_9)
## Moving a Step of ChaCha in Syncopated Rhythm.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#moving-a-step-of-chacha-in-syncopated-rhythm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#moving-a-step-of-chacha-in-syncopated-rhythm)
### Authors
* Shichang Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shiqi Hou, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shichang Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shiqi Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### Abstract
> The stream cipher ChaCha is one of the most widely used ciphers in the real world, such as in TLS, SSH and so on. In this paper, we study the security of ChaCha via differential cryptanalysis based on probabilistic neutrality bits (PNBs). We introduce the syncopation technique for the PNB-based approximation in the backward direction, which significantly amplifies its correlation by utilizing the property of ARX structure. In virtue of this technique, we present a new and efficient method for finding a good set of PNBs. A refined framework of key-recovery attack is then formalized for round-reduced ChaCha. The new techniques allow us to break 7.5 rounds of ChaCha without the last XOR and rotation, as well as to bring faster attacks on 6 rounds and 7 rounds of ChaCha.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_10](https://doi.org/10.1007/978-3-031-38548-3_10)
## Cryptanalysis of Symmetric Primitives over Rings and a Key Recovery Attack on Rubato.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#cryptanalysis-of-symmetric-primitives-over-rings-and-a-key-recovery-attack-on-rubato)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#cryptanalysis-of-symmetric-primitives-over-rings-and-a-key-recovery-attack-on-rubato)
### Authors
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Martha Norberg Hovd, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### Abstract
> Symmetric primitives are a cornerstone of cryptography, and have traditionally been defined over fields, where cryptanalysis is now well understood. However, a few symmetric primitives defined over rings \(\mathbb Z _q\) for a composite number \(q\) have recently been proposed, a setting where security is much less studied. In this paper we focus on studying established algebraic attacks typically defined over fields and the extent of their applicability to symmetric primitives defined over the ring of integers modulo a composite \(q\). Based on our analysis, we present an attack on full Rubato, a family of symmetric ciphers proposed by Ha et al. at Eurocrypt 2022 designed to be used in a transciphering framework for approximate fully homomorphic encryption. We show that at least 25\(\%\) of the possible choices for \(q\) satisfy certain conditions that lead to a successful key recovery attack with complexity significantly lower than the claimed security level for five of the six ciphers in the Rubato family.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_11](https://doi.org/10.1007/978-3-031-38548-3_11)
## Prouff and Rivain's Formal Security Proof of Masking, Revisited - Tight Bounds in the Noisy Leakage Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model)
### Authors
* Loïc Masure, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
### Abstract
> Masking is a counter-measure that can be incorporated to software and hardware implementations of block ciphers to provably secure them against side-channel attacks. The security of masking can be proven in different types of threat models. In this paper, we are interested in directly proving the security in the most realistic threat model, the so-called noisy leakage adversary, that captures well how real-world side-channel adversaries operate. Direct proofs in this leakage model have been established by Prouff & Rivain at Eurocrypt 2013, Dziembowski et al. at Eurocrypt 2015, and Prest et al. at Crypto 2019. These proofs are complementary to each other, in the sense that the weaknesses of one proof are fixed in at least one of the others, and conversely. These weaknesses concerned in particular the strong requirements on the noise level and the security parameter to get meaningful security bounds, and some requirements on the type of adversary covered by the proof—i.e., chosen or random plaintexts. This suggested that the drawbacks of each security bound could actually be proof artifacts. In this paper, we solve both issues, by revisiting Prouff & Rivain’s approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_12](https://doi.org/10.1007/978-3-031-38548-3_12)
## Combined Fault and Leakage Resilience: Composability, Constructions and Compiler.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#combined-fault-and-leakage-resilience-composability-constructions-and-compiler)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#combined-fault-and-leakage-resilience-composability-constructions-and-compiler)
### Authors
* Sebastian Berndt, Institute for Theoretical Computer Science, University of Lübeck, Lübeck, Germany
* Thomas Eisenbarth, Institute for IT Security, University of Lübeck, Lübeck, Germany
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Maximilian Orlt, TU Darmstadt, Darmstadt, Germany
* Marc Gourjon, Hamburg University of Technology, Hamburg, Germany
* Marc Gourjon, NXP Semiconductors, Hamburg, Germany
* Okan Seker, NXP Semiconductors, Hamburg, Germany
### Abstract
> Real-world cryptographic implementations nowadays are not only attacked via classical cryptanalysis but also via implementation attacks, including passive attacks (observing side-channel information about the inner computation) and active attacks (inserting faults into the computation). While countermeasures exist for each type of attack, countermeasures against combined attacks have only been considered recently. Masking is a standard technique for protecting against passive side-channel attacks, but protecting against active attacks with additive masking is challenging. Previous approaches include running multiple copies of a masked computation, requiring a large amount of randomness or being vulnerable to horizontal attacks. An alternative approach is polynomial masking, which is inherently fault-resistant.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_13](https://doi.org/10.1007/978-3-031-38548-3_13)
## Learning with Physical Rounding for Linear and Quadratic Leakage Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#learning-with-physical-rounding-for-linear-and-quadratic-leakage-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#learning-with-physical-rounding-for-linear-and-quadratic-leakage-functions)
### Authors
* Clément Hoffmann, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Charles Momin, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Balazs Udvarhelyi, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Esch-sur-Alzette, Luxembourg
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
### Abstract
> Fresh re-keying is a countermeasure against side-channel analysis where an ephemeral key is derived from a long-term key using a public random value. Popular instances of such schemes rely on key-homomorphic primitives, so that the re-keying process is easy to mask and the rest of the (e.g., block cipher) computations can run with cheaper countermeasures. The main requirement for these schemes to be secure is that the leakages of the ephemeral keys do not allow recovering the long-term key. The Learning with Physical Rounding (LWPR) problem formalizes this security in a practically-relevant model where the adversary can observe noise-free leakages. It can be viewed as a physical version of the Learning With Rounding (LWR) problem, where the rounding is performed by a leakage function and therefore does not have to be computed explicitly. In this paper, we first consolidate the intuition that LWPR cannot be secure in a serial implementation context without additional countermeasures (like shuffling), due to attacks exploiting worst-case leakages that can be mounted with practical data complexity. We then extend the understanding of LWPR in a parallel implementation setting. On the one hand, we generalize its robustness against cryptanalysis taking advantage of any (i.e., not only worst-case) leakage. A previous work claimed security in the specific context of a Hamming weight leakage function. We clarify necessary conditions to maintain this guarantee, based on the degree of the leakage function and the accuracy of its coefficients. On the other hand, we show that parallelism inherently provides good security against attacks exploiting worst-case leakages. We finally confirm the practical relevance of these findings by validating our assumptions experimentally for an exemplary implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_14](https://doi.org/10.1007/978-3-031-38548-3_14)
## Unifying Freedom and Separation for Tight Probing-Secure Composition.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#unifying-freedom-and-separation-for-tight-probing-secure-composition)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#unifying-freedom-and-separation-for-tight-probing-secure-composition)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Gaëtan Cassiers, TU Graz, Graz, Austria
### Abstract
> The masking countermeasure is often analyzed in the probing model. Proving the probing security of large circuits at high masking orders is achieved by composing gadgets that satisfy security definitions such as non-interference (NI), strong non-interference (SNI) or free SNI. The region probing model is a variant of the probing model, where the probing capabilities of the adversary scale with the number of regions in a masked circuit. This model is of interest as it allows better reductions to the more realistic noisy leakage model. The efficiency of composable region probing secure masking has been recently improved with the introduction of the input-output separation (IOS) definition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_15](https://doi.org/10.1007/978-3-031-38548-3_15)
## Twin Column Parity Mixers and Gaston - A New Mixing Layer and Permutation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#twin-column-parity-mixers-and-gaston-a-new-mixing-layer-and-permutation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#twin-column-parity-mixers-and-gaston-a-new-mixing-layer-and-permutation)
### Authors
* Solane El Hirch, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Raghvendra Rohit, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
* Rusydi H. Makarim, Jakarta, Indonesia
### Abstract
> We introduce a new type of mixing layer for the round function of cryptographic permutations, called circulant twin column parity mixer (CPM), that is a generalization of the mixing layers in Keccak-\(f\) and Xoodoo. While these mixing layers have a bitwise differential branch number of 4 and a computational cost of 2 (bitwise) additions per bit, the circulant twin CPMs we build have a bitwise differential branch number of 12 at the expense of an increase in computational cost: depending on the dimension this ranges between 3 and 3.34 XORs per bit. Our circulant twin CPMs operate on a state in the form of a rectangular array and can serve as mixing layer in a round function that has as non-linear step a layer of S-boxes operating in parallel on the columns. When sandwiched between two ShiftRow-like mappings, we can obtain a columnwise branch number of 12 and hence it guarantees 12 active S-boxes per two rounds in differential trails. Remarkably, the linear branch numbers (bitwise and columnwise alike) of these mappings is only 4. However, we define the transpose of a circulant twin CPM that has linear branch number of 12 and a differential branch number of 4. We give a concrete instantiation of a permutation using such a mixing layer, named Gaston. It operates on a state of \(5 \times 64\) bits and uses \(\chi \) operating on columns for its non-linear layer. Most notably, the Gaston round function is lightweight in that it takes as few bitwise operations as the one of NIST lightweight standard Ascon. We show that the best 3-round differential and linear trails of Gaston have much higher weights than those of Ascon. Permutations like Gaston can be very competitive in applications that rely for their security exclusively on good differential properties, such as keyed hashing as in the compression phase of Farfalle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_16](https://doi.org/10.1007/978-3-031-38548-3_16)
## New Design Techniques for Efficient Arithmetization-Oriented Hash Functions: ttAnemoi Permutations and ttJive Compression Mode.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#new-design-techniques-for-efficient-arithmetization-oriented-hash-functions-ttanemoi-permutations-and-ttjive-compression-mode)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#new-design-techniques-for-efficient-arithmetization-oriented-hash-functions-ttanemoi-permutations-and-ttjive-compression-mode)
### Authors
* Clémence Bouvier, Sorbonne University, Paris, France
* Pierre Briaud, Sorbonne University, Paris, France
* Clémence Bouvier, Inria, Paris, France
* Pierre Briaud, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Pyrros Chaidos, National & Kapodistrian University of Athens, Athens, Greece
* Robin Salen, Toposware, Inc., Boston, USA
* Vesselin Velichkov, University of Edinburgh, Edinburgh, Scotland
* Vesselin Velichkov, Clearmatics, London, England
* Danny Willems, Nomadic Labs, Paris, France
* Danny Willems, LIX, Paris, France
### Abstract
> Advanced cryptographic protocols such as Zero-knowledge (ZK) proofs of knowledge, widely used in cryptocurrency applications such as Zcash, Monero, Filecoin, Tezos, Topos, demand new cryptographic hash functions that are efficient not only over the binary field \(\mathbb {F}_2\), but also over large fields of prime characteristic \(\mathbb {F}_p\). This need has been acknowledged by the wider community and new so-called Arithmetization-Oriented (AO) hash functions have been proposed, e.g. MiMC-Hash, Rescue–Prime, Poseidon, Reinforced Concrete and Griffin to name a few.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_17](https://doi.org/10.1007/978-3-031-38548-3_17)
## Coefficient Grouping for Complex Affine Layers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#coefficient-grouping-for-complex-affine-layers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#coefficient-grouping-for-complex-affine-layers)
### Authors
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Clémence Bouvier, Sorbonne University, Paris, France
* Clémence Bouvier, Inria, Paris, France
* Willi Meier, FHNW, Windisch, Switzerland
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, NICT, Tokyo, Japan
### Abstract
> Designing symmetric-key primitives for applications in Fully Homomorphic Encryption (FHE) has become important to address the issue of the ciphertext expansion. In such a context, cryptographic primitives with a low-AND-depth decryption circuit are desired. Consequently, quadratic nonlinear functions are commonly used in these primitives, including the well-known \(\chi \) function over \(\mathbb {F}_2^n\) and the power map over a large finite field \(\mathbb {F}_{p^n}\). In this work, we study the growth of the algebraic degree for an SPN cipher over \(\mathbb {F}_{2^n}^{m}\), whose S-box is defined as the combination of a power map \(x\mapsto x^{2^d+1}\) and an \(\mathbb {F}_2\)-linearized affine polynomial \(x\mapsto c_0+\sum _{i=1}^{w}c_ix^{2^{h_i}}\) where \(c_1,\ldots ,c_w\ne 0\). Specifically, motivated by the fact that the original coefficient grouping technique published at EUROCRYPT 2023 becomes less efficient for \(w>1\), we develop a variant technique that can efficiently work for arbitrary w. With this new technique to study the upper bound of the algebraic degree, we answer the following questions from a theoretic perspective:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_18](https://doi.org/10.1007/978-3-031-38548-3_18)
## Horst Meets Fluid-SPN: Griffin for Zero-Knowledge Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#horst-meets-fluid-spn-griffin-for-zero-knowledge-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#horst-meets-fluid-spn-griffin-for-zero-knowledge-applications)
### Authors
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Yonglin Hao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Roman Walch, Graz University of Technology, Graz, Austria
* Markus Schofnegger, Horizen Labs, Austin, USA
* Roman Walch, Know-Center GmbH, Graz, Austria
* Roman Walch, TACEO GmbH, Graz, Austria
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Paris, France
### Abstract
> Zero-knowledge (ZK) applications form a large group of use cases in modern cryptography, and recently gained in popularity due to novel proof systems. For many of these applications, cryptographic hash functions are used as the main building blocks, and they often dominate the overall performance and cost of these approaches.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_19](https://doi.org/10.1007/978-3-031-38548-3_19)
## On the Security of Keyed Hashing Based on Public Permutations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations)
### Authors
* Jonathan Fuchs, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### Abstract
> Doubly-extendable cryptographic keyed functions (deck) generalize the concept of message authentication codes (MAC) and stream ciphers in that they support variable-length strings as input and return variable-length strings as output. A prominent example of building deck functions is Farfalle, which consists of a set of public permutations and rolling functions that are used in its compression and expansion layers. By generalizing the compression layer of Farfalle, we prove its universality in terms of the probability of differentials over the public permutation used in it. As the compression layer of Farfalle is inherently parallel, we compare it to a generalization of a serial compression function inspired by Pelican-MAC. The same public permutation may result in different universalities depending on whether the compression is done in parallel or serial. The parallel construction consistently performs better than the serial one, sometimes by a big factor. We demonstrate this effect using Xoodoo \([3]\), which is a round-reduced variant of the public permutation used in the deck function Xoofff.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_20](https://doi.org/10.1007/978-3-031-38548-3_20)
## Revisiting the Indifferentiability of the Sum of Permutations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#revisiting-the-indifferentiability-of-the-sum-of-permutations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#revisiting-the-indifferentiability-of-the-sum-of-permutations)
### Authors
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yaobin Shen, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
### Abstract
> The sum of two n-bit pseudorandom permutations is known to behave like a pseudorandom function with n bits of security. A recent line of research has investigated the security of two public n-bit permutations and its degree of indifferentiability. Mandal et al. (INDOCRYPT 2010) proved 2n/3-bit security, Mennink and Preneel (ACNS 2015) pointed out a non-trivial flaw in their analysis and re-proved \((2n/3-\log _2(n))\)-bit security. Bhattacharya and Nandi (EUROCRYPT 2018) eventually improved the result to n-bit security. Recently, Gunsing at CRYPTO 2022 already observed that a proof technique used in this line of research only holds for sequential indifferentiability. We revisit the line of research in detail, and observe that the strongest bound of n-bit security has two other serious issues in the reasoning, the first one is actually the same non-trivial flaw that was present in the work of Mandal et al., while the second one discards biases in the randomness influenced by the distinguisher. More concretely, we introduce two attacks that show limited potential of different approaches. We (i) show that the latter issue that discards biases only holds up to \(2^{3n/4}\) queries, and (ii) perform a differentiability attack against their simulator in \(2^{5n/6}\) queries. On the upside, we revive the result of Mennink and Preneel and show \((2n/3-\log _2(n))\)-bit regular indifferentiability security of the sum of public permutations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_21](https://doi.org/10.1007/978-3-031-38548-3_21)
## When Messages Are Keys: Is HMAC a Dual-PRF?
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#when-messages-are-keys-is-hmac-a-dual-prf)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#when-messages-are-keys-is-hmac-a-dual-prf)
### Authors
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Felix Günther, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Matteo Scarlata, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Mihir Bellare, Department of Computer Science and Engineering, University of California, San Diego, USA
### Abstract
> In Internet security protocols including TLS 1.3, KEMTLS, MLS and Noise, \(\textsf{HMAC}\) is being assumed to be a dual-PRF, meaning a PRF not only when keyed conventionally (through its first input), but also when “swapped” and keyed (unconventionally) through its second (message) input. We give the first in-depth analysis of the dual-PRF assumption on \(\textsf{HMAC}\). For the swap case, we note that security does not hold in general, but completely characterize when it does; we show that \(\textsf{HMAC}\) is swap-PRF secure if and only if keys are restricted to sets satisfying a condition called feasibility, that we give, and that holds in applications. The sufficiency is shown by proof and the necessity by attacks. For the conventional PRF case, we fill a gap in the literature by proving PRF security of \(\textsf{HMAC}\) for keys of arbitrary length. Our proofs are in the standard model, make assumptions only on the compression function underlying the hash function, and give good bounds in the multi-user setting. The positive results are strengthened through achieving a new notion of variable key-length PRF security that guarantees security even if different users use keys of different lengths, as happens in practice.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_22](https://doi.org/10.1007/978-3-031-38548-3_22)
## Layout Graphs, Random Walks and the t-Wise Independence of SPN Block Ciphers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#layout-graphs-random-walks-and-the-t-wise-independence-of-spn-block-ciphers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#layout-graphs-random-walks-and-the-t-wise-independence-of-spn-block-ciphers)
### Authors
* Tianren Liu, Peking University, Beijing, China
* Angelos Pelecanos, UC Berkeley, Berkeley, USA
* Stefano Tessaro, University of Washington, Seattle, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### Abstract
> We continue the study of t-wise independence of substitution-permutation networks (SPNs) initiated by the recent work of Liu, Tessaro, and Vaikuntanathan (CRYPTO 2021).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_23](https://doi.org/10.1007/978-3-031-38548-3_23)
## CSI -Otter: Isogeny-Based (Partially) Blind Signatures from the Class Group Action with a Twist.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#csi-otter-isogeny-based-partially-blind-signatures-from-the-class-group-action-with-a-twist)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#csi-otter-isogeny-based-partially-blind-signatures-from-the-class-group-action-with-a-twist)
### Authors
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Yi-Fu Lai, Department of Mathematics, University of Auckland, Auckland, New Zealand
* Ling Qin, Department of Mathematics, University of Auckland, Auckland, New Zealand
* Jason T. LeGrow, Department of Mathematics, Virginia Polytechnic Institute and State University, Blacksburg, USA
### Abstract
> In this paper, we construct the first provably-secure isogeny-based (partially) blind signature scheme. While at a high level the scheme resembles the Schnorr blind signature, our work does not directly follow from that construction, since isogenies do not offer as rich an algebraic structure. Specifically, our protocol does not fit into the linear identification protocol abstraction introduced by Hauck, Kiltz, and Loss (EUROCYRPT’19), which was used to generically construct Schnorr-like blind signatures based on modules such as classical groups and lattices. Consequently, our scheme does not seem susceptible to the recent efficient ROS attack exploiting the linear nature of the underlying mathematical tool.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_24](https://doi.org/10.1007/978-3-031-38548-3_24)
## Weak Instances of Class Group Action Based Cryptography via Self-pairings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-3].md#weak-instances-of-class-group-action-based-cryptography-via-self-pairings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#weak-instances-of-class-group-action-based-cryptography-via-self-pairings)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, imec-COSIC, KU Leuven, Leuven, Belgium
* Sam van Buuren, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, Departement Wiskunde, KU Leuven, Leuven, Belgium
* Marc Houben, Mathematisch Instituut, Universiteit Leiden, Leiden, The Netherlands
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
* Simon-Philipp Merz, Information Security Group, Royal Holloway, University of London, Egham, UK
* Marzio Mula, Dipartimento di Matematica, Università degli Studi di Trento, Trento, Italy
### Abstract
> In this paper we study non-trivial self-pairings with cyclic domains that are compatible with isogenies between elliptic curves oriented by an imaginary quadratic order \(\mathcal {O}\). We prove that the order m of such a self-pairing necessarily satisfies \(m \mid \varDelta _\mathcal {O}\) (and even \(2m \mid \varDelta _\mathcal {O}\) if \(4 \mid \varDelta _\mathcal {O}\) and \(4m \mid \varDelta _\mathcal {O}\) if \(8 \mid \varDelta _\mathcal {O}\)) and is not a multiple of the field characteristic. Conversely, for each m satisfying these necessary conditions, we construct a family of non-trivial cyclic self-pairings of order m that are compatible with oriented isogenies, based on generalized Weil and Tate pairings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_25](https://doi.org/10.1007/978-3-031-38548-3_25)
