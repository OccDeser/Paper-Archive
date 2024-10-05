# Asiacrypt[2023-4]
## A New Approach Based on Quadratic Forms to Attack the McEliece Cryptosystem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#a-new-approach-based-on-quadratic-forms-to-attack-the-mceliece-cryptosystem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#a-new-approach-based-on-quadratic-forms-to-attack-the-mceliece-cryptosystem)
### Authors
* Alain Couvreur, Inria Saclay, LIX, CNRS UMR 7161, École Polytechnique, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Rocco Mora, Inria Paris, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria Paris, 2 rue Simone Iff, 75012, Paris, France
### Abstract
> We introduce a novel algebraic approach for attacking the McEliece cryptosystem which is currently at the 4-th round of the NIST competition. The contributions of the article are twofold. (1) We present a new distinguisher on alternant and Goppa codes working in a much broader range of parameters than [FGO+11]. (2) With this approach we also provide a polynomial–time key recovery attack on alternant codes which are distinguishable with the distinguisher [FGO+11].
> 
> These results are obtained by introducing a subspace of matrices representing quadratic forms. Those are associated with quadratic relations for the component-wise product in the dual of the Goppa (or alternant) code of the cryptosystem. It turns out that this subspace of matrices contains matrices of unusually small rank in the case of alternant or Goppa codes (2 or 3 depending on the field characteristic) revealing the secret polynomial structure of the code. MinRank solvers can then be used to recover the secret key of the scheme. We devise a dedicated algebraic modeling in characteristic 2 where the Gröbner basis techniques to solve it can be analyzed. This computation behaves differently when applied to the matrix space associated with a random code rather than with a Goppa or an alternant code. This gives a distinguisher of the latter code families, which contrarily to the one proposed in [FGO+11] working only in a tiny parameter regime is now able to work for code rates above \(\frac{2}{3}\). It applies to most of the instantiations of the McEliece cryptosystem in the literature. It coincides with the one of [FGO+11] when the latter can be applied (and is therefore of polynomial complexity in this case). However, its complexity increases significantly when [FGO+11] does not apply anymore, but stays subexponential as long as the co-dimension of the code is sublinear in the length (with an asymptotic exponent which is below those of all known key recovery or message attacks). For the concrete parameters of the McEliece NIST submission [ABC+22], its complexity is way too complex to threaten the cryptosystem, but is smaller than known key recovery attacks for most of the parameters of the submission. This subspace of quadratic forms can also be used in a different manner to give a polynomial time attack of the McEliece cryptosystem based on generic alternant codes or Goppa codes provided that these codes are distinguishable by the method of [FGO+11], and in the Goppa case we need the additional assumption that its degree is less than \(q-1\), where q is the alphabet size of the code.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_1](https://doi.org/10.1007/978-981-99-8730-6_1)
## Solving the Hidden Number Problem for CSIDH and CSURF via Automated Coppersmith.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#solving-the-hidden-number-problem-for-csidh-and-csurf-via-automated-coppersmith)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#solving-the-hidden-number-problem-for-csidh-and-csurf-via-automated-coppersmith)
### Authors
* Jonas Meers, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
### Abstract
> We define and analyze the Commutative Isogeny Hidden Number Problem which is the natural analogue of the Hidden Number Problem in the CSIDH and CSURF setting. In short, the task is as follows: Given two supersingular elliptic curves \(E_A\), \(E_B\) and access to an oracle that outputs some of the most significant bits of the \(\textsf{CDH}\) of two curves, an adversary must compute the shared curve \(E_{AB}=\textsf{CDH} (E_A,E_B)\).
> 
> We show that we can recover \(E_{AB}\) in polynomial time by using Coppersmith’s method as long as the oracle outputs \(\frac{13}{24}+ \varepsilon \approx 54\%\) (CSIDH) and \(\frac{31}{41}+ \varepsilon \approx 76\%\) (CSURF) of the most significant bits of the \(\textsf{CDH}\), where \(\varepsilon > 0\) is an arbitrarily small constant. To this end, we give a purely combinatorial restatement of Coppersmith’s method, effectively concealing the intricate aspects of lattice theory and allowing for near-complete automation. By leveraging this approach, we attain recovery attacks with \(\varepsilon \) close to zero within a few minutes of computation.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_2](https://doi.org/10.1007/978-981-99-8730-6_2)
## Memory-Efficient Attacks on Small LWE Keys.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#memory-efficient-attacks-on-small-lwe-keys)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#memory-efficient-attacks-on-small-lwe-keys)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Rahul Girme, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
* Arindam Mukherjee, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
* Santanu Sarkar, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
### Abstract
> The LWE problem is one of the prime candidates for building the most efficient post-quantum secure public key cryptosystems. Many of those schemes, like Kyber, Dilithium or those belonging to the NTRU-family, such as NTRU-HPS, -HRSS, BLISS or GLP, make use of small max norm keys to enhance efficiency. The presumably best attack on these schemes is a hybrid attack, which combines combinatorial techniques and lattice reduction. While lattice reduction is not known to be able to exploit the small max norm choices, May recently showed (Crypto 2021) that such choices allow for more efficient combinatorial attacks.
> 
> However, these combinatorial attacks suffer enormous memory requirements, which render them inefficient in realistic attack scenarios and, hence, make their general consideration when assessing security questionable. Therefore, more memory-efficient substitutes for these algorithms are needed. In this work, we provide new combinatorial algorithms for recovering small max norm LWE secrets using only a polynomial amount of memory. We provide analyses of our algorithms for secret key distributions of current NTRU, Kyber and Dilithium variants, showing that our new approach outperforms previous memory-efficient algorithms. For instance, considering uniformly random ternary secrets of length n we improve the best known time complexity for polynomial memory algorithms from \(2^{1.063n}\) down-to \(2^{0.926n}\). We obtain even larger gains for LWE secrets in \(\{-m,\ldots ,m\}^n\) with \(m=2,3\) as found in Kyber and Dilithium. For example, for uniformly random keys in \(\{-2,\ldots ,2\}^n\) as is the case for Dilithium we improve the previously best time from \(2^{1.742n}\) down-to \(2^{1.282n}\).
> 
> Our fastest algorithm incorporates various different algorithmic techniques, but at its heart lies a nested collision search procedure inspired by the Nested-Rho technique from Dinur, Dunkelman, Keller and Shamir (Crypto 2016). Additionally, we heavily exploit the representation technique originally introduced in the subset sum context to make our nested approach efficient.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_3](https://doi.org/10.1007/978-981-99-8730-6_3)
## Too Many Hints - When LLL Breaks LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#too-many-hints-when-lll-breaks-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#too-many-hints-when-lll-breaks-lwe)
### Authors
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
### Abstract
> All modern lattice-based schemes build on variants of the LWE problem. Information leakage of the LWE secret \({\textbf {s}} \in \mathbb {Z}_q^n\) is usually modeled via so-called hints, i.e., inner products of \({\textbf {s}}\) with some known vector.
> 
> At Crypto‘20, Dachman-Soled, Ducas, Gong and Rossi (DDGR) defined among other so-called perfect hints and modular hints. The trailblazing DDGR framework allows to integrate and combine hints successively into lattices, and estimates the resulting LWE security loss.
> 
> We introduce a new methodology to integrate and combine an arbitrary number of perfect and modular in a single stroke. As opposed to DDGR’s, our methodology is significantly more efficient in constructing lattice bases, and thus easily allows for a large number of hints up to cryptographic dimensions – a regime that is currently impractical in DDGR’s implementation. The efficiency of our method defines a large LWE parameter regime, in which we can fully carry out attacks faster than DDGR can solely estimate them.
> 
> The benefits of our approach allow us to practically determine which number of hints is sufficient to efficiently break LWE-based lattice schemes in practice. E.g., for mod-q hints, i.e., modular hints defined over \(\mathbb {Z}_q\), we reconstruct Kyber-512 secret keys via LLL reduction (only!) with an amount of 449 hints.
> 
> Our results for perfect hints significantly improve over these numbers, requiring for LWE dimension n roughly n/2 perfect hints. E.g., we reconstruct via LLL reduction Kyber-512 keys with merely 234 perfect hints. If we resort to stronger lattice reduction techniques like BKZ, we need even fewer hints.
> 
> For mod-q hints our method is extremely efficient, e.g., taking total time for constructing our lattice bases and secret key recovery via LLL of around 20 mins for dimension 512. For perfect hints in dimension 512, we require around 3 h.
> 
> Our results demonstrate that especially perfect hints are powerful in practice, and stress the necessity to properly protect lattice schemes against leakage.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_4](https://doi.org/10.1007/978-981-99-8730-6_4)
## We are on the Same Side. Alternative Sieving Strategies for the Number Field Sieve.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#we-are-on-the-same-side-alternative-sieving-strategies-for-the-number-field-sieve)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#we-are-on-the-same-side-alternative-sieving-strategies-for-the-number-field-sieve)
### Authors
* Charles Bouillaguet, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Ambroise Fleury, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ Rennes, CNRS, IRISA, Rennes, France
### Abstract
> The Number Field Sieve (NFS) is the state-of-the art algorithm for integer factoring, and sieving is a crucial step in the NFS. It is a very time-consuming operation, whose goal is to collect many relations. The ultimate goal is to generate random smooth integers mod N with their prime decomposition, where smooth is defined on the rational and algebraic sides according to two prime factor bases.
> 
> In modern factorization tool, such as Cado-NFS, sieving is split into different stages depending on the size of the primes, but defining good parameters for all stages is based on heuristic and practical arguments. At the beginning, candidates are sieved by small primes on both sides, and if they pass the test, they continue to the next stages with bigger primes, up to the final one where we factor the remaining part using the ECM algorithm. On the one hand, first stages are fast but many false relations pass them, and we spend a lot of time with useless relations. On the other hand final stages are more time demanding but outputs less relations. It is not easy to evaluate the performance of the best strategy on the overall sieving step since it depends on the distribution of numbers that results at each stage.
> 
> In this article, we try to examine different sieving strategies to speed up this step since many improvements have been done on all other steps of the NFS. Based on the relations collected during the RSA-250 factorization and all parameters, we try to study different strategies to better understand this step. Many strategies have been defined since the discovery of NFS, and we provide here an experimental evaluation.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_5](https://doi.org/10.1007/978-981-99-8730-6_5)
## Exploiting the Symmetry of $\mathbb {Z}^n$: Randomization and the Automorphism Problem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#exploiting-the-symmetry-of-mathbb-z-n-randomization-and-the-automorphism-problem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#exploiting-the-symmetry-of-mathbb-z-n-randomization-and-the-automorphism-problem)
### Authors
* Kaijie Jiang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Hengyi Luo, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Hengyi Luo, School of Mathematical Sciences, University of Chinese Academy of Sciences, Beijing, China
* Guoxiao Liu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### Abstract
> \(\mathbb {Z}^n\) is one of the simplest types of lattices, but the computational problems on its rotations, such as \(\mathbb {Z}\)SVP and \(\mathbb {Z}\)LIP, have been of great interest in cryptography. Recent advances have been made in building cryptographic primitives based on these problems, as well as in developing new algorithms for solving them. However, the theoretical complexity of \(\mathbb {Z}\)SVP and \(\mathbb {Z}\)LIP are still not well understood.
> 
> In this work, we study the problems on rotations of \(\mathbb {Z}^n\) by exploiting the symmetry property. We introduce a randomization framework that can be roughly viewed as ‘applying random automorphisms’ to the output of an oracle, without accessing the automorphism group. Using this framework, we obtain new reduction results for rotations of \(\mathbb {Z}^n\). First, we present a reduction from \(\mathbb {Z}\)LIP to \(\mathbb {Z}\)SCVP. Here \(\mathbb {Z}\)SCVP is the problem of finding the shortest characteristic vectors, which is a special case of CVP where the target vector is a deep hole of the lattice. Moreover, we prove a reduction from \(\mathbb {Z}\)SVP to \(\gamma \)-\(\mathbb {Z}\)SVP for any constant \(\gamma = O(1)\) in the same dimension, which implies that \(\mathbb {Z}\)SVP is as hard as its approximate version for any constant approximation factor. Second, we investigate the problem of finding a nontrivial automorphism for a given lattice, which is called LAP. Specifically, we use the randomization framework to show that \(\mathbb {Z}\)LAP is as hard as \(\mathbb {Z}\)LIP. We note that our result can be viewed as a \(\mathbb {Z}^n\)-analogue of Lenstra and Silverberg’s result in [JoC2017], but with a different assumption: they assume the G-lattice structure, while we assume the access to an oracle that outputs a nontrivial automorphism.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_6](https://doi.org/10.1007/978-981-99-8730-6_6)
## SCA-LDPC: A Code-Based Framework for Key-Recovery Side-Channel Attacks on Post-quantum Encryption Schemes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#sca-ldpc-a-code-based-framework-for-key-recovery-side-channel-attacks-on-post-quantum-encryption-schemes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#sca-ldpc-a-code-based-framework-for-key-recovery-side-channel-attacks-on-post-quantum-encryption-schemes)
### Authors
* Qian Guo, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Denis Nabokov, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Advenica AB, Malmö, Sweden
### Abstract
> Whereas theoretical attacks on standardized cryptographic primitives rarely lead to actual practical attacks, the situation is different for side-channel attacks. Improvements in the performance of side-channel attacks are of utmost importance.
> 
> In this paper, we propose a framework to be used in key-recovery side-channel attacks on CCA-secure post-quantum encryption schemes. The basic idea is to construct chosen ciphertext queries to a plaintext checking oracle that collects information on a set of secret variables in a single query. Then a large number of such queries is considered, each related to a different set of secret variables, and they are modeled as a low-density parity-check code (LDPC code). Secret variables are finally determined through efficient iterative decoding methods, such as belief propagation, using soft information. The utilization of LDPC codes offers efficient decoding, source coding, and error correction benefits. It has been demonstrated that this approach provides significant improvements compared to previous work by reducing the required number of queries, such as the number of traces in a power attack.
> 
> The framework is demonstrated and implemented in two different cases. On one hand, we attack implementations of HQC in a timing attack, lowering the number of required traces considerably compared to attacks in previous work. On the other hand, we describe and implement a full attack on a masked implementation of Kyber using power analysis. Using the ChipWhisperer evaluation platform, our real-world attacks recover the long-term secret key of a first-order masked implementation of Kyber-768 with an average of only 12 power traces.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_7](https://doi.org/10.1007/978-981-99-8730-6_7)
## Exploiting Algebraic Structures in Probing Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#exploiting-algebraic-structures-in-probing-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#exploiting-algebraic-structures-in-probing-security)
### Authors
* Maxime Plançon, IBM Research Europe, Zurich, Switzerland
* Maxime Plançon, ETH Zurich, Zurich, Switzerland
### Abstract
> The so-called \(\omega \)-encoding, introduced by Goudarzi, Joux and Rivain (Asiacrypt 2018), generalizes the commonly used arithmetic encoding. By using the additionnal structure of this encoding, they proposed a masked multiplication gadget (GJR) with quasilinear (randomness and operations) complexity. A follow-up contribution by Goudarzi, Prest, Rivain and Vergnaud in this line of research appeared in TCHES 2021. The authors revisited the aforementioned multiplication gadget (GPRV), and brought the IOS security notion for refresh gadgets to allow secure composition between probing secure gadgets.
> 
> In this paper, we propose a follow up on GPRV, that is, a region-probing secure arithmetic circuit masked compiler. Our contribution stems from a single Lemma, linking algebra and probing security for a wide class of circuits, further taking advantage of the algebraic structure of \(\omega \)-encoding, and the extension field structure of the underlying field that was so far left unexploited. On the theoretical side, we propose a security notion for \(\boldsymbol{\omega }_d\)-masked circuits which we call Reducible-To-Independent-K-linear (RTIK). When the number of shares d is less than or equal to the degree k of , RTIK circuits achieve region-probing security. Moreover, RTIK circuits may be composed naively and remain RTIK. We also propose a weaker version of IOS, which we call KIOS, for refresh gadgets. This notion allows to compose RTIK circuits with a randomness/security tradeoff compared to the naive composition.
> 
> To substantiate our new definitions, we also provide examples of competitively efficient gadgets verifying the latter weaker security notions. Explicitly, we give 1) two refresh gadgets that use \(d-1\) random field elements to refresh a length d encoding, both of which are KIOS but not IOS, and 2) a multiplication gadget with bilinear multiplication complexity \(d^{\log 3}\) and uses d fresh random elements per run. Our compiler outperforms ISW asymptotically, but for our security proofs to hold, we do require that the number of shares d is less than or equal to the degree of as an extension, so that there is sufficient structure to exploit.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_8](https://doi.org/10.1007/978-981-99-8730-6_8)
## Practically Efficient Private Set Intersection from Trusted Hardware with Side-Channels.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#practically-efficient-private-set-intersection-from-trusted-hardware-with-side-channels)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#practically-efficient-private-set-intersection-from-trusted-hardware-with-side-channels)
### Authors
* Felix Dörre, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jeremias Mechler, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jörn Müller-Quade, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
### Abstract
> Private set intersection (PSI) is one of the most important privacy-enhancing technologies with applications such as malware and spam detection, recognition of child pornography, contact discovery, or, more recently, contact tracing. In this paper, we investigate how PSI can be constructed and implemented simply and practically efficient. To this end, a natural possibility is the use of trusted execution environments (TEEs), which are commonly used in place of a trusted third party due to their presumed security guarantees. However, this trust is often not warranted: Today’s TEEs like Intel SGX suffer from a number of side-channels that allow the host to learn secrets of a TEE, unless countermeasures are taken. Furthermore, due to the high complexity and closed-source nature, it cannot be ruled out that a TEE is passively corrupted, i.e. leaks secrets to the manufacturer or a government agency such as the NSA. When constructing a protocol using TEEs, such (potential) vulnerabilities need to be accounted for. Otherwise, all security may be lost.
> 
> We propose a protocol for two-party PSI whose security holds in a setting where TEEs cannot be fully trusted, e.g. due to the existence of side-channels. In particular, we deal with the possibilities that i) the TEE is completely transparent for the host, except for very simple secure cryptographic operations or ii) that it leaks all secrets to a third party, e.g. the manufacturer. Even in this challenging setting, our protocol is not only very fast, but also conceptually simple, which is an important feature as more complex protocols tend to be implemented with subtle security faults.
> 
> To formally capture this setting, we define variants of the ideal functionality for TEEs due to Pass et al. (EUROCRYPT 2017). Using these functionalities, we prove our protocol’s security, which holds under universal composition. To illustrate the usefulness of our model, we sketch other possible applications like (randomized) oblivious transfer or private computation of the Hamming distance.
> 
> Our PSI implementation, which uses Intel SGX as TEE, computes the intersection between two sets with \(2^{24}\) 128-bit elements in 7.3 s. This makes our protocol the fastest PSI protocol to date with respect to single-threaded performance.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_9](https://doi.org/10.1007/978-981-99-8730-6_9)
## Quantitative Fault Injection Analysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#quantitative-fault-injection-analysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#quantitative-fault-injection-analysis)
### Authors
* Jakob Feldtkeller, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, DFKI, Bremen, Germany
* Patrick Schaumont, Worcester Polytechnic Institute, Worcester, USA
### Abstract
> Active fault injection is a credible threat to real-world digital systems computing on sensitive data. Arguing about security in the presence of faults is non-trivial, and state-of-the-art criteria are overly conservative and lack the ability of fine-grained comparison. However, comparing two alternative implementations for their security is required to find a satisfying compromise between security and performance. In addition, the comparison of alternative fault scenarios can help optimize the implementation of effective countermeasures.
> 
> In this work, we use quantitative information flow analysis to establish a vulnerability metric for hardware circuits under fault injection that measures the severity of an attack in terms of information leakage. Potential use cases range from comparing implementations with respect to their vulnerability to specific fault scenarios to optimizing countermeasures. We automate the computation of our metric by integrating it into a state-of-the-art evaluation tool for physical attacks and provide new insights into the security under an active fault attacker.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_10](https://doi.org/10.1007/978-981-99-8730-6_10)
## On the (Im)possibility of Time-Lock Puzzles in the Quantum Random Oracle Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#on-the-im-possibility-of-time-lock-puzzles-in-the-quantum-random-oracle-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#on-the-im-possibility-of-time-lock-puzzles-in-the-quantum-random-oracle-model)
### Authors
* Abtin Afshar, University of Virginia, Charlottesville, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Yao-Ching Hsieh, University of Washington, Seattle, USA
* Yao-Ting Lin, UCSB, Santa Barbara, USA
### Abstract
> Time-lock puzzles wrap a solution \(\textrm{s}\) inside a puzzle \(\textrm{P}\) in such a way that “solving” \(\textrm{P}\) to find \(\textrm{s}\) requires significantly more time than generating the pair \((\textrm{s},\textrm{P})\), even if the adversary has access to parallel computing; hence it can be thought of as sending a message \(\textrm{s}\) to the future. It is known [Mahmoody, Moran, Vadhan, Crypto’11] that when the source of hardness is only a random oracle, then any puzzle generator with n queries can be (efficiently) broken by an adversary in O(n) rounds of queries to the oracle.
> 
> In this work, we revisit time-lock puzzles in a quantum world by allowing the parties to use quantum computing and, in particular, access the random oracle in quantum superposition. An interesting setting is when the puzzle generator is efficient and classical, while the solver (who might be an entity developed in the future) is quantum-powered and is supposed to need a long sequential time to succeed. We prove that in this setting there is no construction of time-lock puzzles solely from quantum (accessible) random oracles. In particular, for any n-query classical puzzle generator, our attack only asks O(n) (also classical) queries to the random oracle, even though it does indeed run in quantum polynomial time if the honest puzzle solver needs quantum computing.
> 
> Assuming perfect completeness, we also show how to make the above attack run in exactly n rounds while asking a total of \(m\cdot n\) queries where m is the query complexity of the puzzle solver. This is indeed tight in the round complexity, as we also prove that a classical puzzle scheme of Mahmoody et al. is also secure against quantum solvers who ask \(n-1\) rounds of queries. In fact, even for the fully classical case, our attack quantitatively improves the total queries of the attack of Mahmoody et al. for the case of perfect completeness from \(O(mn \log n)\) to mn. Finally, assuming perfect completeness, we present an attack in the “dual” setting in which the puzzle generator is quantum while the solver is classical.
> 
> We then ask whether one can extend our classical-query attack to the fully quantum setting, in which both the puzzle generator and the solver could be quantum. We show a barrier for proving such results unconditionally. In particular, we show that if the folklore simulation conjecture, first formally stated by Aaronson and Ambainis [arXiv’2009] is false, then there is indeed a time-lock puzzle in the quantum random oracle model that cannot be broken by classical adversaries. This result improves the previous barrier of Austrin et. al [Crypto’22] about key agreements (that can have interactions in both directions) to time-lock puzzles (that only include unidirectional communication).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_11](https://doi.org/10.1007/978-981-99-8730-6_11)
## Towards Compressed Permutation Oracles.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#towards-compressed-permutation-oracles)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#towards-compressed-permutation-oracles)
### Authors
* Dominique Unruh, RWTH Aachen, Aachen, Germany
* Dominique Unruh, University of Tartu, Tartu, Estonia
### Abstract
> Compressed oracles (Zhandry, Crypto 2019) are a powerful technique to reason about quantum random oracles, enabling a sort of lazy sampling in the presence of superposition queries. A long-standing open question is whether a similar technique can also be used to reason about random (efficiently invertible) permutations.
> 
> In this work, we make a step towards answering this question. We first define the compressed permutation oracle and illustrate its use. While the soundness of this technique (i.e., the indistinguishability from a random permutation) remains a conjecture, we show a curious 2-for-1 theorem: If we use the compressed permutation oracle methodology to show that some construction (e.g., Luby-Rackoff) implements a random permutation (or strong qPRP), then we get the fact that this methodology is actually sound for free.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_12](https://doi.org/10.1007/978-981-99-8730-6_12)
## Tighter Security for Generic Authenticated Key Exchange in the QROM.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#tighter-security-for-generic-authenticated-key-exchange-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#tighter-security-for-generic-authenticated-key-exchange-in-the-qrom)
### Authors
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
* Jiaxin Pan, University of Kassel, Kassel, Germany
### Abstract
> We give a tighter security proof for authenticated key exchange (AKE) protocols that are generically constructed from key encapsulation mechanisms (KEMs) in the quantum random oracle model (QROM). Previous works (Hövelmanns et al., PKC 2020) gave reductions for such a KEM-based AKE protocol in the QROM to the underlying primitives with square-root loss and a security loss in the number of users and total sessions. Our proof is much tighter and does not have square-root loss. Namely, it only loses a factor depending on the number of users, not on the number of sessions.
> 
> Our main enabler is a new variant of lossy encryption which we call parameter lossy encryption. In this variant, there are not only lossy public keys but also lossy system parameters. This allows us to embed a computational assumption into the system parameters, and the lossy public keys are statistically close to the normal public keys. Combining with the Fujisaki-Okamoto transformation, we obtain the first tightly IND-CCA secure KEM in the QROM in a multi-user (without corruption), multi-challenge setting.
> 
> Finally, we show that a multi-user, multi-challenge KEM implies a square-root-tight and session-tight AKE protocol in the QROM. By implementing the parameter lossy encryption tightly from lattices, we obtain the first square-root-tight and session-tight AKE from lattices in the QROM.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_13](https://doi.org/10.1007/978-981-99-8730-6_13)
## Post-quantum Security of Key Encapsulation Mechanism Against CCA Attacks with a Single Decapsulation Query.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#post-quantum-security-of-key-encapsulation-mechanism-against-cca-attacks-with-a-single-decapsulation-query)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#post-quantum-security-of-key-encapsulation-mechanism-against-cca-attacks-with-a-single-decapsulation-query)
### Authors
* Haodong Jiang, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhi Ma, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhenfeng Zhang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
### Abstract
> Recently, in post-quantum cryptography migration, it has been shown that an IND-1-CCA-secure key encapsulation mechanism (KEM) is required for replacing an ephemeral Diffie-Hellman (DH) in widely-used protocols, e.g., TLS, Signal, and Noise. IND-1-CCA security is a notion similar to the traditional IND-CCA security except that the adversary is restricted to one single decapsulation query. At EUROCRYPT 2022, based on CPA-secure public-key encryption (PKE), Huguenin-Dumittan and Vaudenay presented two IND-1-CCA KEM constructions called \(T_{CH}\) and \(T_H\), which are much more efficient than the widely-used IND-CCA-secure Fujisaki-Okamoto (FO) KEMs. The security of \(T_{CH}\) was proved in both random oracle model (ROM) and quantum random oracle model (QROM). However, the QROM proof of \(T_{CH}\) relies on an additional ciphertext expansion. While, the security of \(T_H\) was only proved in the ROM, and the QROM proof is left open.
> 
> In this paper, we prove the security of \(T_H\) and \(T_{RH}\) (an implicit variant of \(T_H\)) in both ROM and QROM with much tighter reductions than Huguenin-Dumittan and Vaudenay’s work. In particular, our QROM proof will not lead to ciphertext expansion. Moreover, for \(T_{RH}\), \(T_H\) and \(T_{CH}\), we also show that a O(1/q) (\(O(1/q^2)\), resp.) reduction loss is unavoidable in the ROM (QROM, resp.), and thus claim that our ROM proof is optimal in tightness. Finally, we make a comprehensive comparison among the relative strengths of IND-1-CCA and IND-CCA in the ROM and QROM.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_14](https://doi.org/10.1007/978-981-99-8730-6_14)
