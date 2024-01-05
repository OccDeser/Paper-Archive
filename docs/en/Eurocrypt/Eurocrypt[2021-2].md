# Eurocrypt[2021-2]
## Ciminion: Symmetric Encryption Based on Toffoli-Gates over Large Finite Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields)
### Authors
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Anna Guinet, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Daniël Kuijsters, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> Motivated by new applications such as secure Multi-Party Computation (MPC), Fully Homomorphic Encryption (FHE), and Zero-Knowledge proofs (ZK), the need for symmetric encryption schemes that minimize the number of field multiplications in their natural algorithmic description is apparent. This development has brought forward many dedicated symmetric encryption schemes that minimize the number of multiplications in \( \mathbb {F}_{2^n} \) or \( \mathbb {F}_{p} \), with p being prime. These novel schemes have lead to new cryptanalytic insights that have broken many of said schemes. Interestingly, to the best of our knowledge, all of the newly proposed schemes that minimize the number of multiplications use those multiplications exclusively in S-boxes based on a power mapping that is typically \(x^3\) or \(x^{-1}\). Furthermore, most of those schemes rely on complex and resource-intensive linear layers to achieve a low multiplication count. In this paper, we present Ciminion, an encryption scheme minimizing the number of field multiplications in large binary or prime fields, while using a very lightweight linear layer. In contrast to other schemes that aim to minimize field multiplications in \( \mathbb {F}_{2^n} \) or \( \mathbb {F}_{p} \), Ciminion relies on the Toffoli gate to improve the non-linear diffusion of the overall design. In addition, we have tailored the primitive for the use in a Farfalle-like construction in order to minimize the number of rounds of the used primitive, and hence, the number of field multiplications as far as possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_1](https://doi.org/10.1007/978-3-030-77886-6_1)
## Mind the Middle Layer: The HADES Design Strategy Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited)
### Authors
* Nathan Keller, Mathematics Department, Bar Ilan University, Ramat Gan, Israel
* Asaf Rosemarin, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> The HADES design strategy combines the classical SPN construction with the Partial SPN (PSPN) construction, in which at every encryption round, the non-linear layer is applied to only a part of the state. In a HADES design, a middle layer that consists of PSPN rounds is surrounded by outer layers of SPN rounds. The security arguments of HADES with respect to statistical attacks use only the SPN rounds, disregarding the PSPN rounds. This allows the designers to not pose any restriction on the MDS matrix used as the linear mixing operation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_2](https://doi.org/10.1007/978-3-030-77886-6_2)
## Password Hashing and Preprocessing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing)
### Authors
* Pooya Farshim, University of York, York, UK
* Stefano Tessaro, University of Washington, Seattle, USA
### Abstract
> How does the cryptanalytic effort needed to compromise t out of m instances of hashed passwords scale with the number of users when arbitrary preprocessing information on the hash function is available? We provide a formal treatment of this problem in the multi-instance setting with auxiliary information. A central contribution of our work is an (arguably simple) transcript-counting argument that allows us to resolve a fundamental question left open by Bellare, Ristenpart, and Tessaro (BRT; CRYPTO 2012) in multi-instance security. We leverage this proof technique to formally justify unrecoverability of hashed salted passwords in the presence of auxiliary information in the random-oracle model. To this end we utilize the recent pre-sampling techniques for dealing with auxiliary information developed by Coretti et al. (CRYPTO 2018). Our bounds closely match those commonly assumed in practice.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_3](https://doi.org/10.1007/978-3-030-77886-6_3)
## Compactness of Hashing Modes and Efficiency Beyond Merkle Tree.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree)
### Authors
* Elena Andreeva, Technical University of Vienna, Vienna, Austria
* Rishiraj Bhattacharyya, NISER, HBNI, Jatani, India
* Arnab Roy, University of Klagenfurt, Klagenfurt, Austria
### Abstract
> We revisit the classical problem of designing optimally efficient cryptographically secure hash functions. Hash functions are traditionally designed via applying modes of operation on primitives with smaller domains. The results of Shrimpton and Stam (ICALP 2008), Rogaway and Steinberger (CRYPTO 2008), and Mennink and Preneel (CRYPTO 2012) show how to achieve optimally efficient designs of 2n-to-n-bit compression functions from non-compressing primitives with asymptotically optimal \(2^{n/2-\epsilon }\)-query collision resistance. Designing optimally efficient and secure hash functions for larger domains (\({>}{2n}\) bits) is still an open problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_4](https://doi.org/10.1007/978-3-030-77886-6_4)
## Three Third Generation Attacks on the Format Preserving Encryption Scheme FF3.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3)
### Authors
* Ohad Amon, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> Format-Preserving Encryption (FPE) schemes accept plaintexts from any finite set of values (such as social security numbers or birth dates) and produce ciphertexts that belong to the same set. They are extremely useful in practice since they make it possible to encrypt existing databases or communication packets without changing their format. Due to industry demand, NIST had standardized in 2016 two such encryption schemes called FF1 and FF3. They immediately attracted considerable cryptanalytic attention with decreasing attack complexities. The best currently known attack on the Feistel construction FF3 has data and memory complexity of \({O}(N^{11/6})\) and time complexity of \({O}(N^{17/6})\), where the input belongs to a domain of size \(N \times N\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_5](https://doi.org/10.1007/978-3-030-77886-6_5)
## Cryptanalysis of the GPRS Encryption Algorithms GEA-1 and GEA-2.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2)
### Authors
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* David Rupprecht, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Gaëtan Leurent, Inria, Paris, France
* Håvard Raddum, Simula UiB, Bergen, Norway
* Yann Rotella, Laboratoire de Mathématiques de Versailles, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### Abstract
> This paper presents the first publicly available cryptanalytic attacks on the GEA-1 and GEA-2 algorithms. Instead of providing full 64-bit security, we show that the initial state of GEA-1 can be recovered from as little as 65 bits of known keystream (with at least 24 bits coming from one frame) in time \(2^{40}\) GEA-1 evaluations and using 44.5 GiB of memory.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_6](https://doi.org/10.1007/978-3-030-77886-6_6)
## Pre-computation Scheme of Window τNAF for Koblitz Curves Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited)
### Authors
* Wei Yu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Guangwu Xu, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Qingdao, 266237, Shandong, China
* Guangwu Xu, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, Shandong, China
### Abstract
> Let \(E_a/ \mathbb {F}_{2}: y^2+xy=x^3+ax^2+1\) be a Koblitz curve. The window \(\tau \)-adic non-adjacent form (window \(\tau \)NAF) is currently the standard representation system to perform scalar multiplications on \(E_a/ \mathbb {F}_{2^m}\) utilizing the Frobenius map \(\tau \). This work focuses on the pre-computation part of scalar multiplication. We first introduce \(\mu \bar{\tau }\)-operations where \(\mu =(-1)^{1-a}\) and \(\bar{\tau }\) is the complex conjugate of \(\tau \). Efficient formulas of \(\mu \bar{\tau }\)-operations are then derived and used in a novel pre-computation scheme. Our pre-computation scheme requires 6M\(\,+\,6\)S, 18M\(\,+\,17\)S, 44M\(\,+\,32\)S, and 88M\(\,+\,62\)S (\(a=0\)) and 6M\(\,+\,6\)S, 19M\(\,+\,17\)S, 46M\(\,+\,32\)S, and 90M\(\,+\,62\)S (\(a=1\)) for window \(\tau \)NAF with widths from 4 to 7 respectively. It is about two times faster, compared to the state-of-the-art technique of pre-computation in the literature. The impact of our new efficient pre-computation is also reflected by the significant improvement of scalar multiplication. Traditionally, window \(\tau \)NAF with width at most 6 is used to achieve the best scalar multiplication. Because of the dramatic cost reduction of the proposed pre-computation, we are able to increase the width for window \(\tau \)NAF to 7 for a better scalar multiplication. This indicates that the pre-computation part becomes more important in performing scalar multiplication. With our efficient pre-computation and the new window width, our scalar multiplication runs in at least 85.2% the time of Kohel’s work (Eurocrypt’2017) combining the best previous pre-computation. Our results push the scalar multiplication of Koblitz curves, a very well-studied and long-standing research area, to a significant new stage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_7](https://doi.org/10.1007/978-3-030-77886-6_7)
## Dummy Shuffling Against Algebraic Attacks in White-Box Implementations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations)
### Authors
* Alex Biryukov, DCS and SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Aleksei Udovenko, CryptoExperts, Paris, France
### Abstract
> At CHES 2016, Bos et al. showed that most of existing white-box implementations are easily broken by standard side-channel attacks. A natural idea to apply the well-developed side-channel countermeasure - linear masking schemes - leaves implementations vulnerable to linear algebraic attacks which exploit absence of noise in the white-box setting and are applicable for any order of linear masking. At ASIACRYPT 2018, Biryukov and Udovenko proposed a security model (BU-model for short) for protection against linear algebraic attacks and a new quadratic masking scheme which is provably secure in this model. However, countermeasures against higher-degree attacks were left as an open problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_8](https://doi.org/10.1007/978-3-030-77886-6_8)
## Advanced Lattice Sieving on GPUs, with Tensor Cores.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores)
### Authors
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Marc Stevens, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Amsterdam, The Netherlands
### Abstract
> In this work, we study GPU implementations of various state-of-the-art sieving algorithms for lattices (Becker-Gama-Joux 2015, Becker-Ducas-Gama-Laarhoven 2016, Herold-Kirshanova 2017) inside the General Sieve Kernel (G6K, Albrecht et al. 2019). In particular, we extensively exploit the recently introduced Tensor Cores – originally designed for raytracing and machine learning – and demonstrate their fitness for the cryptanalytic task at hand. We also propose a new dual-hash technique for efficient detection of ‘lift-worthy’ pairs to accelerate a key ingredient of G6K: finding short lifted vectors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_9](https://doi.org/10.1007/978-3-030-77886-6_9)
## Fast Verification of Masking Schemes in Characteristic Two.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two)
### Authors
* Nicolas Bordes, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
* Pierre Karpman, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
### Abstract
> We revisit the matrix model for non-interference (NI) probing security of masking gadgets introduced by Belaïd et al. at CRYPTO 2017. This leads to two main results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_10](https://doi.org/10.1007/978-3-030-77886-6_10)
## On the Power of Expansion: More Efficient Constructions in the Random Probing Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
### Abstract
> The random probing model is a leakage model in which each wire of a circuit leaks with a given probability p. This model enjoys practical relevance thanks to a reduction to the noisy leakage model, which is admitted as the right formalization for power and electromagnetic side-channel attacks. In addition, the random probing model is much more convenient than the noisy leakage model to prove the security of masking schemes. In a recent work, Ananth, Ishai, and Sahai (CRYPTO 2018) introduce a nice expansion strategy to construct random probing secure circuits. Their construction tolerates a leakage probability of \(2^{-26}\), which is the first quantified achievable leakage probability in the random probing model. In a follow-up work, Belaïd, Coron, Prouff, Rivain, and Taleb (CRYPTO 2020) generalize their idea and put forward a complete and practical framework to generate random probing secure circuits. The so-called expanding compiler can bootstrap simple base gadgets as long as they satisfy a new security notion called random probing expandability (RPE). They further provide an instantiation of the framework which tolerates a \(2^{-8}\) leakage probability in complexity \(\mathcal {O}(\kappa ^{7.5})\) where \(\kappa \) denotes the security parameter.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_11](https://doi.org/10.1007/978-3-030-77886-6_11)
## Leakage-Resilience of the Shamir Secret-Sharing Scheme Against Physical-Bit Leakages.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
* Tom Suad, Department of Computer Science, Ariel University, Ariel, Israel
### Abstract
> Efficient Reed-Solomon code reconstruction algorithms, for example, by Guruswami and Wootters (STOC–2016), translate into local leakage attacks on Shamir secret-sharing schemes over characteristic-2 fields. However, Benhamouda, Degwekar, Ishai, and Rabin (CRYPTO–2018) showed that the Shamir secret sharing scheme over prime-fields is leakage resilient to one-bit local leakage if the reconstruction threshold is roughly 0.87 times the total number of parties. In several application scenarios, like secure multi-party multiplication, the reconstruction threshold must be at most half the number of parties. Furthermore, the number of leakage bits that the Shamir secret sharing scheme is resilient to is also unclear.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_12](https://doi.org/10.1007/978-3-030-77886-6_12)
## Leakage Resilient Value Comparison with Application to Message Authentication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication)
### Authors
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### Abstract
> Side-channel attacks are a threat to secrets stored on a device, especially if an adversary has physical access to the device. As an effect of this, countermeasures against such attacks for cryptographic algorithms are a well-researched topic. In this work, we deviate from the study of cryptographic algorithms and instead focus on the side-channel protection of a much more basic operation, the comparison of a known attacker-controlled value with a secret one. Comparisons sensitive to side-channel leakage occur in tag comparisons during the verification of message authentication codes (MACs) or authenticated encryption, but are typically omitted in security analyses. Besides, also comparisons performed as part of fault countermeasures might be sensitive to side-channel attacks. In this work, we present a formal analysis on comparing values in a leakage resilient manner by utilizing cryptographic building blocks that are typically part of an implementation anyway. Our results indicate that there is no need to invest additional resources into implementing a protected comparison operation itself if a sufficiently protected implementation of a public cryptographic permutation, or a (tweakable) block cipher, is already available. We complement our contribution by applying our findings to the SuKS message authentication code used by lightweight authenticated encryption scheme ISAP, and to the classical Hash-then-PRF construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_13](https://doi.org/10.1007/978-3-030-77886-6_13)
## The Mother of All Leakages: How to Simulate Noisy Leakages via Bounded Leakage (Almost) for Free.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free)
### Authors
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, EURECOM, Sophia-Antipolis, France
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* João Ribeiro, Imperial College London, London, UK
* Mark Simkin, Aarhus University, Aarhus, Denmark
* Maciej Skórski, University of Luxembourg, Luxembourg, Luxembourg
### Abstract
> We show that the most common flavors of noisy leakage can be simulated in the information-theoretic setting using a single query of bounded leakage, up to a small statistical simulation error and a slight loss in the leakage parameter. The latter holds true in particular for one of the most used noisy-leakage models, where the noisiness is measured using the conditional average min-entropy (Naor and Segev, CRYPTO’09 and SICOMP’12).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_14](https://doi.org/10.1007/978-3-030-77886-6_14)
## Message-Recovery Laser Fault Injection Attack on the Classic McEliece Cryptosystem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem)
### Authors
* Pierre-Louis Cayrel, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Lilian Bossuet, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Brice Colombier, Univ Grenoble Alpes, CNRS, Grenoble INP, TIMA, 38000, Grenoble, France
* Vlad-Florin Drăgoi, Faculty of Exact Sciences, Aurel Vlaicu University, Arad, Romania
* Vlad-Florin Drăgoi, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Alexandre Menu, IMT, Mines Saint-Etienne, Centre CMP, Equipe Commune CEA Tech-Mines Saint-Etienne, 13541, Gardanne, France
### Abstract
> Code-based public-key cryptosystems are promising candidates for standardization as quantum-resistant public-key cryptographic algorithms. Their security is based on the hardness of the syndrome decoding problem. Computing the syndrome in a finite field, usually \(\mathbb {F}_{2}\), guarantees the security of the constructions. We show in this article that the problem becomes considerably easier to solve if the syndrome is computed in \(\mathbb {N}\) instead. By means of laser fault injection, we illustrate how to compute the matrix-vector product in \(\mathbb {N}\) by corrupting specific instructions, and validate it experimentally. To solve the syndrome decoding problem in \(\mathbb {N}\), we propose a reduction to an integer linear programming problem. We leverage the computational efficiency of linear programming solvers to obtain real-time message recovery attacks against the code-based proposal to the NIST Post-Quantum Cryptography standardization challenge. We perform our attacks in the worst-case scenario, i.e. considering random binary codes, and retrieve the initial message within minutes on a desktop computer.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_15](https://doi.org/10.1007/978-3-030-77886-6_15)
## Multi-source Non-malleable Extractors and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications)
### Authors
* Vipul Goyal, CMU and NTT Research, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Chenzhi Zhu, Tsinghua University, Beijing, China
### Abstract
> We introduce a natural generalization of two-source non-malleable extractors (Cheragachi and Guruswami, TCC 2014) called as multi-source non-malleable extractors. Multi-source non-malleable extractors are special independent source extractors which satisfy an additional non-malleability property. This property requires that the output of the extractor remains close to uniform even conditioned on its output generated by tampering several sources together. We formally define this primitive, give a construction that is secure against a wide class of tampering functions, and provide applications. More specifically, we obtain the following results:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_16](https://doi.org/10.1007/978-3-030-77886-6_16)
## Secure Software Leasing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing)
### Authors
* Prabhanjan Ananth, UC Santa Barbara, Santa Barbara, USA
* Rolando L. La Placa, MIT, Santa Barbara, USA
### Abstract
> Formulating cryptographic definitions to protect against software piracy is an important research direction that has not received much attention. Since natural definitions using classical cryptography are impossible to achieve (as classical programs can always be copied), this directs us towards using techniques from quantum computing. The seminal work of Aaronson [CCC’09] introduced the notion of quantum copy-protection precisely to address the problem of software anti-piracy. However, despite being one of the most important problems in quantum cryptography, there are no provably secure solutions of quantum copy-protection known for any class of functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_17](https://doi.org/10.1007/978-3-030-77886-6_17)
## Oblivious Transfer Is in MiniQCrypt.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt)
### Authors
* Alex B. Grilo, CNRS, LIP6, Sorbonne Université, Paris, France
* Huijia Lin, University of Washington, Seattle, WA, USA
* Fang Song, Portland State University, Portland, OR, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> MiniQCrypt is a world where quantum-secure one-way functions exist, and quantum communication is possible. We construct an oblivious transfer (OT) protocol in MiniQCrypt that achieves simulation-security in the plain model against malicious quantum polynomial-time adversaries, building on the foundational work of Crépeau and Killian (FOCS 1988) and Bennett, Brassard, Crépeau and Skubiszewska (CRYPTO 1991). Combining the OT protocol with prior works, we obtain secure two-party and multi-party computation protocols also in MiniQCrypt. This is in contrast to the classical world, where it is widely believed that one-way functions alone do not give us OT.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_18](https://doi.org/10.1007/978-3-030-77886-6_18)
## Security Analysis of Quantum Lightning.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning)
### Authors
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
### Abstract
> Quantum lightning is a new cryptographic object that gives a strong form of quantum money. Zhandry recently defined quantum lightning and proposed a construction of it based on superpositions of low-rank matrices. The scheme is unusual, so it is difficult to base the scheme’s security on any widespread computational assumptions. Instead, Zhandry proposed a new hardness assumption that, if true, could be used to prove security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_19](https://doi.org/10.1007/978-3-030-77886-6_19)
## Classical vs Quantum Random Oracles.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles)
### Authors
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### Abstract
> In this paper, we study relationship between security of cryptographic schemes in the random oracle model (ROM) and quantum random oracle model (QROM). First, we introduce a notion of a proof of quantum access to a random oracle (PoQRO), which is a protocol to prove the capability to quantumly access a random oracle to a classical verifier. We observe that a proof of quantumness recently proposed by Brakerski et al. (TQC ’20) can be seen as a PoQRO. We also give a construction of a publicly verifiable PoQRO relative to a classical oracle. Based on them, we construct digital signature and public key encryption schemes that are secure in the ROM but insecure in the QROM. In particular, we obtain the first examples of natural cryptographic schemes that separate the ROM and QROM under a standard cryptographic assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_20](https://doi.org/10.1007/978-3-030-77886-6_20)
## On the Compressed-Oracle Technique, and Post-Quantum Security of Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work)
### Authors
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Serge Fehr, CWI, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Yu-Hsuan Huang, National Chiao-Tung University, Hsinchu City, Taiwan
* Tai-Ning Liao, National Taiwan University, Taipei City, Taiwan
### Abstract
> We revisit the so-called compressed oracle technique, introduced by Zhandry for analyzing quantum algorithms in the quantum random oracle model (QROM). To start off with, we offer a concise exposition of the technique, which easily extends to the parallel-query QROM, where in each query-round the considered algorithm may make several queries to the QROM in parallel. This variant of the QROM allows for a more fine-grained query-complexity analysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_21](https://doi.org/10.1007/978-3-030-77886-6_21)
## Classical Proofs of Quantum Knowledge.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge)
### Authors
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Tina Zhang, Division of Physics, Mathematics and Astronomy, California Institute of Technology, Pasadena, USA
### Abstract
> We define the notion of a proof of knowledge in the setting where the verifier is classical, but the prover is quantum, and where the witness that the prover holds is in general a quantum state. We establish simple properties of our definition, including that, if a nondestructive classical proof of quantum knowledge exists for some state, then that state can be cloned by an unbounded adversary, and that, under certain conditions on the parameters in our definition, a proof of knowledge protocol for a hard-to-clone state can be used as a (destructive) quantum money verification protocol. In addition, we provide two examples of protocols (both inspired by private-key classical verification protocols for quantum money schemes) which we can show to be proofs of quantum knowledge under our definition. In so doing, we introduce techniques for the analysis of such protocols which build on results from the literature on nonlocal games. Finally, we show that, under our definition, the verification protocol introduced by Mahadev (FOCS 2018) is a classical argument of quantum knowledge for QMA relations. In all cases, we construct an explicit quantum extractor that is able to produce a quantum witness given black-box quantum (rewinding) access to the prover, the latter of which includes the ability to coherently execute the prover’s black-box circuit controlled on a superposition of messages from the verifier.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_22](https://doi.org/10.1007/978-3-030-77886-6_22)
## Order-C Secure Multiparty Computation for Highly Repetitive Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits)
### Authors
* Gabrielle Beck, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### Abstract
> Running secure multiparty computation (MPC) protocols with hundreds or thousands of players would allow leveraging large volunteer networks (such as blockchains and Tor) and help justify honest majority assumptions. However, most existing protocols have at least a linear (multiplicative) dependence on the number of players, making scaling difficult. Known protocols with asymptotic efficiency independent of the number of parties (excluding additive factors) require expensive circuit transformations that induce large overheads.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_23](https://doi.org/10.1007/978-3-030-77886-6_23)
## The More the Merrier: Reducing the Cost of Large Scale MPC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc)
### Authors
* S. Dov Gordon, George Mason University, Fairfax, USA
* Daniel Starin, Perspecta Labs, Basking Ridge, USA
* Arkady Yerukhimovich, George Washington University, Washington, D.C., USA
### Abstract
> Secure multi-party computation (MPC) allows multiple parties to perform secure joint computations on their private inputs. Today, applications for MPC are growing with thousands of parties wishing to build federated machine learning models or trusted setups for blockchains. To address such scenarios we propose a suite of novel MPC protocols that maximize throughput when run with large numbers of parties. In particular, our protocols have both communication and computation complexity that decrease with the number of parties. Our protocols buildon prior protocolsbased on packed secret-sharing, introducing new techniques to build more efficient computation for general circuits. Specifically, we introduce a new approach for handling linear attacks that arise in protocols using packed secret-sharing and we propose a method for unpacking shared multiplication triples without increasing the asymptotic costs. Compared with prior work, we avoid the \(\log |C|\) overhead required when generically compiling circuits of size |C| for use in a SIMD computation, and we improve over folklore “committee-based” solutions by a factor of O(s), the statistical security parameter. In practice, our protocol is up to 10X faster than any known construction, under a reasonable set of parameters.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_24](https://doi.org/10.1007/978-3-030-77886-6_24)
## Multiparty Reusable Non-interactive Secure Computation from LWE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe)
### Authors
* Fabrice Benhamouda, Algorand Foundation, New York, USA
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Aayush Jain, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### Abstract
> Motivated by the goal of designing versatile and flexible secure computation protocols that at the same time require as little interaction as possible, we present new multiparty reusable Non-Interactive Secure Computation (mrNISC) protocols. This notion, recently introduced by Benhamouda and Lin (TCC 2020), is essentially two-round Multi-Party Computation (MPC) protocols where the first round of messages serves as a reusable commitment to the private inputs of participating parties. Using these commitments, any subset of parties can later compute any function of their choice on their respective inputs by just sending a single message to a stateless evaluator, conveying the result of the computation but nothing else. Importantly, the input commitments can be computed without knowing anything about other participating parties (neither their identities nor their number) and they are reusable across any number of desired computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_25](https://doi.org/10.1007/978-3-030-77886-6_25)
## Unbounded Multi-party Computation from Learning with Errors.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors)
### Authors
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> We consider the problem of round-optimal unbounded MPC: in the first round, parties publish a message that depends only on their input. In the second round, any subset of parties can jointly and securely compute any function f over their inputs in a single round of broadcast. We do not impose any a-priori bound on the number of parties nor on the size of the functions that can be computed.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_26](https://doi.org/10.1007/978-3-030-77886-6_26)
## Generic Compiler for Publicly Verifiable Covert Multi-Party Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation)
### Authors
* Sebastian Faust, Technical University of Darmstadt, Darmstadt, Germany
* David Kretzler, Technical University of Darmstadt, Darmstadt, Germany
* Benjamin Schlosser, Technical University of Darmstadt, Darmstadt, Germany
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Covert security has been introduced as a compromise between semi-honest and malicious security. In a nutshell, covert security guarantees that malicious behavior can be detected by the honest parties with some probability, but in case detection fails all bets are off. While the security guarantee offered by covert security is weaker than full-fledged malicious security, it comes with significantly improved efficiency. An important extension of covert security introduced by Asharov and Orlandi (ASIACRYPT’12) is public verifiability, which allows the honest parties to create a publicly verifiable certificate of malicious behavior. Public verifiability significantly strengthen covert security as the certificate allows punishment via an external party, e.g., a judge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_27](https://doi.org/10.1007/978-3-030-77886-6_27)
## Constant-Overhead Unconditionally Secure Multiparty Computation Over Binary Fields.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields)
### Authors
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We study the communication complexity of unconditionally secure multiparty computation (MPC) protocols in the honest majority setting. Despite tremendous efforts in achieving efficient protocols for binary fields under computational assumptions, there are no efficient unconditional MPC protocols in this setting. In particular, there are no n-party protocols with constant overhead admitting communication complexity of O(n) bits per gate. Cascudo, Cramer, Xing and Yuan (CRYPTO 2018) were the first ones to achieve such an overhead in the amortized setting by evaluating \(O(\log n)\) copies of the same circuit in the binary field in parallel. In this work, we construct the first unconditional MPC protocol secure against a malicious adversary in the honest majority setting evaluating just a single boolean circuit with amortized communication complexity of O(n) bits per gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_28](https://doi.org/10.1007/978-3-030-77886-6_28)
## Breaking the Circuit Size Barrier for Secure Computation Under Quasi-Polynomial LPN.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Pierre Meyer, École Normale Supérieure de Lyon and IDC Herzliya, Herzliya, Israel
### Abstract
> In this work we introduce a new (circuit-dependent) homomorphic secret sharing (HSS) scheme for all \(\log /\log \log \)-local circuits, with communication proportional only to the width of the circuit, and polynomial computation, assuming the super-polynomial hardness of learning parity with noise (\(\mathsf {LPN}\)). At the heart of our new construction is a pseudorandom correlation generator (PCG), which allows two partie to locally stretch, from short seeds, pseudorandom instances of an arbitrary \(\log /\log \log \)-local additive correlation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_29](https://doi.org/10.1007/978-3-030-77886-6_29)
## Function Secret Sharing for Mixed-Mode and Fixed-Point Secure Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Divya Gupta, Microsoft Research, Bengaluru, India
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Nishant Kumar, University of Illinois at Urbana-Champaign, Champaign, USA
* Mayank Rathee, University of California, Berkeley, USA
### Abstract
> Boyle et al. (TCC 2019) proposed a new approach for secure computation in the preprocessing model building on function secret sharing (FSS), where a gate g is evaluated using an FSS scheme for the related offset family \(g_r(x)=g(x+r)\). They further presented efficient FSS schemes based on any pseudorandom generator (PRG) for the offset families of several useful gates g that arise in “mixed-mode” secure computation. These include gates for zero test, integer comparison, ReLU, and spline functions. The FSS-based approach offers significant savings in online communication and round complexity compared to alternative techniques based on garbled circuits or secret sharing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_30](https://doi.org/10.1007/978-3-030-77886-6_30)
## VOLE-PSI: Fast OPRF and Circuit-PSI from Vector-OLE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole)
### Authors
* Peter Rindal, Visa Research, Palo Alto, USA
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
### Abstract
> In this work we present a new construction for a batched Oblivious Pseudorandom Function (OPRF) based on Vector-OLE and the PaXoS data structure. We then use it in the standard transformation for achieving Private Set Intersection (PSI) from an OPRF. Our overall construction is highly efficient with O(n) communication and computation. We demonstrate that our protocol can achieve malicious security at only a very small overhead compared to the semi-honest variant. For input sizes \(n = 2^{20}\), our malicious protocol needs 6.2 s and less than 59 MB communication. This corresponds to under 450 bits per element, which is the lowest number for any published PSI protocol (semi-honest or malicious) to date. Moreover, in theory our semi-honest (resp. malicious) protocol can achieve as low as 219 (resp. 260) bits per element for \(n=2^{20}\) at the added cost of interpolating a polynomial over n elements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_31](https://doi.org/10.1007/978-3-030-77886-6_31)
