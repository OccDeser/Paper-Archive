# Crypto[2024-3]
## On the Practical CPAD Security of "exact" and Threshold FHE Schemes and Libraries.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)
### Authors
* Marina Checri, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Renaud Sirdey, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Aymen Boudguiga, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Jean-Paul Bultel, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
### Abstract
> In their Eurocrypt’21 seminal paper, Li and Micciancio presented a passive attack against the CKKS approximate FHE scheme and introduced the notion of \(\text {CPA}^{D}\) security. The current status quo is that this line of attacks does not apply to “exact” FHE. In this paper, we challenge this status quo by exhibiting a \(\text {CPA}^{D}\) key recovery attack on the linearly homomorphic Regev cryptosystem, which easily generalizes to other xHE schemes such as BFV, BGV and TFHE, showing that these cryptosystems are not \(\text {CPA}^{D}\) secure in their basic form. We also show that existing threshold variants of BFV, BGV and CKKS are particularly exposed to \(\text {CPA}^{D}\) attackers and would be \(\text {CPA}^{D}\)-insecure without proper smudging noise addition after partial decryption. Finally, we successfully implement our attack against several mainstream FHE libraries and discuss a number of natural countermeasures as well as their consequences in terms of FHE practice, security and efficiency. The attack itself is quite practical as it typically takes less than an hour on an average laptop PC, requiring a few thousand ciphertexts as well as up to around a million evaluations/decryptions, to perform a full key recovery.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_1](https://doi.org/10.1007/978-3-031-68382-4_1)
## Lossy Cryptography from Code-Based Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)
### Authors
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Over the past few decades, we have seen a proliferation of advanced cryptographic primitives with lossy or homomorphic properties built from various assumptions such as Quadratic Residuosity, Decisional Diffie-Hellman, and Learning with Errors. These primitives imply hard problems in the complexity class \(\mathcal {SZK}\) (statistical zero-knowledge); as a consequence, they can only be based on assumptions that are broken in \(\mathcal {BPP}^{\mathcal {SZK}}\). This poses a barrier for building advanced cryptography from code-based assumptions such as Learning Parity with Noise (LPN), as LPN is only known to be in \(\mathcal {BPP}^{\mathcal {SZK}}\) under an extremely low noise rate \(\frac{\log ^2 n}{n}\), for which it is broken in quasi-polynomial time.
> 
> In this work, we propose a new code-based assumption: Dense-Sparse LPN, that falls in the complexity class \(\mathcal {BPP}^{\mathcal {SZK}}\) and is conjectured to be secure against subexponential time adversaries. Our assumption is a variant of LPN that is inspired by McEliece’s cryptosystem and random \(k\text{- }\)XOR in average-case complexity. Roughly, the assumption states that
> 
> for a random (dense) matrix \(\textbf{T}\), random sparse matrix \(\textbf{M}\), and sparse noise vector \(\textbf{e}\) drawn from the Bernoulli distribution with inverse polynomial noise probability.
> 
> We leverage our assumption to build lossy trapdoor functions (Peikert-Waters STOC 08). This gives the first post-quantum alternative to the lattice-based construction in the original paper. Lossy trapdoor functions, being a fundamental cryptographic tool, are known to enable a broad spectrum of both lossy and non-lossy cryptographic primitives; our construction thus implies these primitives in a generic manner. In particular, we achieve collision-resistant hash functions with plausible subexponential security, improving over a prior construction from LPN with noise rate \(\frac{\log ^2 n}{n}\) that is only quasi-polynomially secure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_2](https://doi.org/10.1007/978-3-031-68382-4_2)
## Exploring the Advantages and Challenges of Fermat NTT in FHE Acceleration.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)
### Authors
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Sunmin Kwon, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Hyung Chul Kang, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Ahmet Can Mert, Graz University of Technology, Graz, Austria
* Anisha Mukherjee, Graz University of Technology, Graz, Austria
* Aikata Aikata, Graz University of Technology, Graz, Austria
* Sujoy Sinha Roy, Graz University of Technology, Graz, Austria
### Abstract
> Recognizing the importance of a fast and resource-efficient polynomial multiplication in homomorphic encryption, in this paper, we design a multiplier-less number theoretic transform using a Fermat number as an auxiliary modulus. To make this algorithm scalable with the degree of polynomial, we apply a univariate to multivariate polynomial ring transformation. We develop an accelerator architecture for fully homomorphic encryption using these algorithmic techniques for efficient multivariate polynomial multiplication. For practical homomorphic encryption application benchmarks, the hardware accelerator achieves a 1,200\(\times \) speed-up compared to software implementations. Finally, we conclude the paper by discussing the advantages and limitations of the proposed polynomial multiplication method.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_3](https://doi.org/10.1007/978-3-031-68382-4_3)
## Laconic Function Evaluation and ABE for RAMs from (Ring-)LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)
### Authors
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Hoeteck Wee, ENS, Paris, France
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> Laconic function evaluation (LFE) allows us to compress a circuit f into a short digest. Anybody can use this digest as a public-key to efficiently encrypt some input x. Decrypting the resulting ciphertext reveals the output f(x), while hiding everything else about x. In this work we consider LFE for Random-Access Machines (RAM-LFE) where, instead of a circuit f, we have a RAM program \(f_{\textsf{DB}}\) that potentially contains some large hard-coded data \(\textsf{DB}\). The decryption run-time to recover \(f_{\textsf{DB}}(x)\) from the ciphertext should be roughly the same as a plain evaluation of \(f_{\textsf{DB}}(x)\) in the RAM model, which can be sublinear in the size of \(\textsf{DB}\). Prior works constructed LFE for circuits under LWE, and RAM-LFE under indisitinguishability obfuscation (iO) and Ring-LWE. In this work, we construct RAM-LFE with essentially optimal encryption and decryption run-times from just Ring-LWE and a standard circular security assumption, without iO.
> 
> RAM-LFE directly yields 1-key succinct functional encryption and reusable garbling for RAMs with similar parameters.
> 
> If we only want an attribute-based LFE for RAMs (RAM-AB-LFE), then we can replace Ring-LWE with plain LWE in the above. Orthogonally, if we only want leveled schemes, where the encryption/decryption efficiency can scale with the depth of the RAM computation, then we can remove the need for a circular-security. Lastly, we also get a leveled many-key attribute-based encryption for RAMs (RAM-ABE), from LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_4](https://doi.org/10.1007/978-3-031-68382-4_4)
## Reducing the CRS Size in Registered ABE Systems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)
### Authors
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Attribute-based encryption (ABE) is a generalization of public-key encryption that enables fine-grained access control to encrypted data. In (ciphertext-policy) ABE, a central trusted authority issues decryption keys for attributes x to users. In turn, ciphertexts are associated with a decryption policy \(\ensuremath {\mathcal {P}}\). Decryption succeeds and recovers the encrypted message whenever \(\ensuremath {\mathcal {P}}(x) = 1\). Recently, Hohenberger, Lu, Waters, and Wu (Eurocrypt 2023) introduced the notion of registered ABE, which is an ABE scheme without a trusted central authority. Instead, users generate their own public/secret keys (just like in public-key encryption) and then register their keys (and attributes) with a key curator. The key curator is a transparent and untrusted entity.
> 
> Currently, the best pairing-based registered ABE schemes support monotone Boolean formulas and an a priori bounded number of users L. A major limitation of existing schemes is that they require a (structured) common reference string (CRS) of size \(L^2 \cdot |\ensuremath {\mathcal {U}}|\) where \(|\ensuremath {\mathcal {U}}|\) is the size of the attribute universe. In other words, the size of the CRS scales quadratically with the number of users and multiplicatively with the size of the attribute universe. The large CRS makes these schemes expensive in practice and limited to a small number of users and a small universe of attributes.
> 
> In this work, we give two ways to reduce the CRS size in pairing-based registered ABE schemes. First, we introduce a combinatoric technique based on progression-free sets that enables registered ABE for the same class of policies but with a CRS whose size is sub-quadratic in the number of users. Asymptotically, we obtain a scheme where the CRS size is nearly linear in the number of users L (i.e., \(L^{1 + o(1)}\)). If we take a more concrete-efficiency-oriented focus, we can instantiate our framework to obtain a construction with a CRS of size \(L^{\log _2 3} \approx L^{1.6}\). For instance, in a scheme for 100,000 users, our approach reduces the CRS by a factor of over \(115\times \) compared to previous approaches (and without incurring any overhead in encryption/decryption time). Our second approach for reducing the CRS size is to rely on a partitioning-based argument when arguing security of the registered ABE scheme. Previous approaches took a dual-system approach. Using a partitioning-based argument yields a registered ABE scheme where the size of the CRS is independent of the size of the attribute universe. The cost is the resulting scheme satisfies a weaker notion of static security. Our techniques for reducing the CRS size can be combined, and taken together, we obtain a pairing-based registered ABE scheme that supports monotone Boolean formulas with a CRS size of \(L^{1 + o(1)}\). Notably, this is the first pairing-based registered ABE scheme that does not require imposing a bound on the size of the attribute universe during setup time.
> 
> As an additional application, we also show how to apply our techniques based on progression-free sets to the batch argument (BARG) for \(\ensuremath {\textsf{NP}} \) scheme of Waters and Wu (Crypto 2022) to obtain a scheme with a nearly-linear CRS without needing to rely on non-black-box bootstrapping techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_5](https://doi.org/10.1007/978-3-031-68382-4_5)
## Circuit ABE with sfpoly( depth,λ )-Sized Ciphertexts and Keys from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)
### Authors
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
### Abstract
> We present new lattice-based attribute-based encryption (ABE) and laconic function evaluation (LFE) schemes for circuits with sublinear ciphertext overhead. For depth d circuits over \(\ell \)-bit inputs, we obtain
> 
> an ABE with ciphertext and secret key size O(1);
> 
> a LFE with ciphertext size \(\ell + O(1)\) and digest size O(1);
> 
> an ABE with public key and ciphertext size \(O(\ell ^{2/3})\) and secret key size O(1),
> 
> where \(O(\cdot )\) hides \(\textsf{poly}(d,\lambda )\) factors. The first two results achieve almost optimal ciphertext and secret key/digest sizes, up to the \(\textsf{poly}(d)\) dependencies. The security of our schemes relies on \(\ell \)-succinct LWE, a falsifiable assumption which is implied by evasive LWE. At the core of our results is a new technique for compressing LWE samples \(\textbf{s}(\textbf{A}-\textbf{x}\otimes \textbf{G})\) as well as the matrix \(\textbf{A}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_6](https://doi.org/10.1007/978-3-031-68382-4_6)
## A Systematic Study of Sparse LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)
### Authors
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Huijia Lin, Carnegie Mellon University, Pittsburgh, PA, USA
* Sagnik Saha, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Sagnik Saha, University of Washington, Seattle, WA, USA
### Abstract
> In this work, we introduce the sparse LWE assumption, an assumption that draws inspiration from both Learning with Errors (Regev JACM 10) and Sparse Learning Parity with Noise (Alekhnovich FOCS 02). Exactly like LWE, this assumption posits indistinguishability of \((\textbf{A}, \textbf{s}\textbf{A}+\textbf{e} \mod p)\) from \((\textbf{A}, \textbf{u})\) for a random \(\textbf{u}\) where the secret \(\textbf{s}\), and the error vector \(\textbf{e}\) is generated exactly as in LWE. However, the coefficient matrix \(\textbf{A}\) in sparse LPN is chosen randomly from \(\ensuremath {\mathbb {Z}}^{n\times m}_{p}\) so that each column has Hamming weight exactly k for some small k. We study the problem in the regime where k is a constant or polylogarithmic. The primary motivation for proposing this assumption is efficiency. Compared to LWE, the samples can be computed and stored with roughly O(n/k) factor improvement in efficiency. Our results can be summarized as:
> 
> Foundations: We show several properties of sparse LWE samples, including: 1) The hardness of LWE/LPN with dimension k implies the hardness of sparse LWE/LPN with sparsity k and arbitrary dimension \(n \ge k\). 2) When the number of samples \(m=\varOmega (n \log p)\), length of the shortest vector of a lattice spanned by rows of a random sparse matrix is large, close to that of a random dense matrix of the same dimension (up to a small constant factor). 3) Trapdoors with small polynomial norm exist for random sparse matrices with dimension \(n \times m = O(n \log p)\). 4) Efficient algorithms for sampling such matrices together with trapdoors exist when the dimension is \(n \times m = \ensuremath {\widetilde{\mathcal {O}}}(n^2)\).
> 
> Cryptanalysis: We examine the suite of algorithms that have been used to break LWE and sparse LPN. While naively many of the attacks that apply to LWE do not exploit sparsity, we consider natural extensions that make use of sparsity. We propose a model to capture all these attacks. Using this model we suggest heuristics on how to identify concrete parameters. Our initial cryptanalysis suggests that concretely sparse LWE with a modest k and slightly bigger dimension than LWE will satisfy similar level of security as LWE with similar parameters.
> 
> Applications: We show that the hardness of sparse LWE implies very efficient homomorphic encryption schemes for low degree computations. We obtain the first secret key Linearly Homomorphic Encryption (LHE) schemes with slightly super-constant, or even constant, overhead, which further has applications to private information retrieval, private set intersection, etc. We also obtain secret key homomorphic encryption for arbitrary constant-degree polynomials with slightly super-constant, or constant, overhead.
> 
> We stress that our results are preliminary. However, our results make a strong case for further investigation of sparse LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_7](https://doi.org/10.1007/978-3-031-68382-4_7)
## How to Construct Quantum FHE, Generically.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)
### Authors
* Aparna Gupte, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### Abstract
> We construct a (compact) quantum fully homomorphic encryption (QFHE) scheme starting from any (compact) classical fully homomorphic encryption scheme with decryption in \(\textsf{NC}^{1}\), together with a dual-mode trapdoor function family. Compared to previous constructions (Mahadev, FOCS 2018; Brakerski, CRYPTO 2018) which made non-black-box use of similar underlying primitives, our construction provides a pathway to instantiations from different assumptions. Our construction uses the techniques of Dulek, Schaffner and Speelman (CRYPTO 2016) and shows how to make the client in their QFHE scheme classical using dual-mode trapdoor functions. As an additional contribution, we show a new instantiation of dual-mode trapdoor functions from group actions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_8](https://doi.org/10.1007/978-3-031-68382-4_8)
## A Modular Approach to Registered ABE for Unbounded Predicates.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)
### Authors
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Registered attribute-based encryption (Reg-ABE), introduced by Hohenberger et al. (Eurocrypt’23), emerges as a pivotal extension of attribute-based encryption (ABE), aimed at mitigating the key-escrow problem. Although several Reg-ABE schemes with black-box use of cryptography have been proposed so far, there remains a significant gap in the class of achievable predicates between vanilla ABE and Reg-ABE. To narrow this gap, we propose a modular framework for constructing Reg-ABE schemes for a broader class of predicates. Our framework is a Reg-ABE analog of the predicate transformation framework for ABE introduced by Attrapadung (Eurocrypt’19) and later refined by Attrapadung and Tomida (Asiacrypt’20) to function under the standard MDDH assumption. As immediate applications, our framework implies the following new Reg-ABE schemes under the standard MDDH assumption:
> 
> the first Reg-ABE scheme for (non-)monotone span programs with the traditional completely unbounded property.
> 
> the first Reg-ABE scheme for general non-monotone span programs (also with the completely unbounded property) as defined in the case of vanilla ABE by Attrapadung and Tomida (Asiacrypt’20).
> 
> Here, the term “completely unbounded” signifies the absence of restrictions on attribute sets for users and policies associated with ciphertexts.
> 
> From a technical standpoint, we first substantially modify pair encoding schemes (PES), originally devised for vanilla ABE by Attrapadung (Eurocrypt’14), to make them compatible with Reg-ABE. Subsequently, we present a series of predicate transformations through which we can construct complex predicates, particularly those with an “unbounded” characteristic, starting from simple ones. Finally, we define new properties of PES necessary for constructing Reg-ABE schemes and prove that these properties are preserved through the transformations. This immediately implies that we can obtain Reg-ABE schemes for any predicates derived via predicate transformations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_9](https://doi.org/10.1007/978-3-031-68382-4_9)
## Fully-Succinct Multi-key Homomorphic Signatures from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)
### Authors
* Gaspard Anthoine, IMDEA Software Institute, Madrid, Spain
* David Balbás, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Gaspard Anthoine, Universidad Politécnica de Madrid, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
### Abstract
> Multi-Key Homomorphic Signatures (MKHS) allow one to evaluate a function on data signed by distinct users while producing a succinct and publicly-verifiable certificate of the correctness of the result. All the constructions of MKHS in the state of the art achieve a weak level of succinctness where signatures are succinct in the total number of inputs but grow linearly with the number of users involved in the computation. The only exception is a SNARK-based construction which relies on a strong notion of knowledge soundness in the presence of signing oracles that not only requires non-falsifiable assumptions but also encounters some impossibility results.
> 
> In this work, we present the first construction of MKHS that are fully succinct (also with respect to the number of users) while achieving adaptive security under standard falsifiable assumptions. Our result is achieved through a novel combination of batch arguments for NP (BARGs) and functional commitments (FC), and yields diverse MKHS instantiations for circuits of unbounded depth based on either pairing or lattice assumptions. Additionally, our schemes support efficient verification with pre-processing, and they can easily be extended to achieve multi-hop evaluation and context-hiding.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_10](https://doi.org/10.1007/978-3-031-68382-4_10)
## Attribute Based Encryption for Turing Machines from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Shota Yamada, AIST Tokyo, Koto, Japan
### Abstract
> We provide the first attribute based encryption (ABE) scheme for Turing machines supporting unbounded collusions from lattice assumptions. In more detail, the encryptor encodes an attribute \(\textbf{x}\) together with a bound t on the machine running time and a message m into the ciphertext, the key generator embeds a Turing machine M into the secret key and decryption returns m if and only if \(M(\textbf{x})=1\). Crucially, the input \(\textbf{x}\) and machine M can be of unbounded size, the time bound t can be chosen dynamically for each input and decryption runs in input specific time.
> 
> Previously the best known ABE for uniform computation supported only non-deterministic log space Turing machines (\(\textsf{NL})\) from pairings (Lin and Luo, Eurocrypt 2020). In the post-quantum regime, the state of the art supports non-deterministic finite automata from LWE in the symmetric key setting (Agrawal, Maitra and Yamada, Crypto 2019).
> 
> In more detail, our results are:
> 
> 1. We construct the first ABE for \(\textsf{NL}\) from the LWE, evasive LWE (Wee, Eurocrypt 2022 and Tsabary, Crypto 2022) and Tensor LWE (Wee, Eurocrypt 2022) assumptions. This yields the first (conjectured) post-quantum ABE for \(\textsf{NL}\).
> 
> 2. Relying on LWE, evasive LWE and a new assumption called circular tensor LWE, we construct ABE for all Turing machines. At a high level, the circular tensor LWE assumption incorporates circularity into the tensor LWE (Wee, Eurocrypt 2022) assumption.
> 
> Towards our ABE for Turing machines, we obtain the first CP-ABE for circuits of unbounded depth and size from the same assumptions – this may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_11](https://doi.org/10.1007/978-3-031-68382-4_11)
## Plaintext-Ciphertext Matrix Multiplication and FHE Bootstrapping: Fast and Fused.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)
### Authors
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Guillaume Hanrot, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> Homomorphically multiplying a plaintext matrix with a ciphertext matrix (PC-MM) is a central task for the private evaluation of transformers, commonly used for large language models. We provide several RLWE-based algorithms for PC-MM that consist of multiplications of plaintext matrices (PP-MM) and comparatively cheap pre-processing and post-processing steps: for small and large dimensions compared to the RLWE ring degree, and with and without precomputation. For the algorithms with precomputation, we show how to perform a PC-MM with a single floating-point PP-MM of the same dimensions. This is particularly meaningful for practical purposes as a floating-point PP-MM can be implemented using high-performance BLAS libraries.
> 
> The algorithms rely on the multi-secret variant of RLWE, which allows to represent multiple ciphertexts more compactly. We give algorithms to convert from usual shared-secret RLWE ciphertexts to multi-secret ciphertexts and back. Further, we show that this format is compatible with homomorphic addition, plaintext-ciphertext multiplication, and key-switching. This in turn allows us to accelerate the slots-to-coeffs and coeffs-to-slots steps of CKKS bootstrapping when several ciphertexts are bootstrapped at once. Combining batch-bootstrapping with efficient PC-MM results in MaMBo(Matrix Multiplication Bootstrapping), a bootstrapping algorithm that can perform a PC-MM for a limited overhead.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_12](https://doi.org/10.1007/978-3-031-68382-4_12)
## Time-Lock Puzzles from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)
### Authors
* Shweta Agrawalr, IIT Madras, Chennai, India
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Ruhr University Bochum, Bochum, Germany
### Abstract
> Time-lock puzzles (TLP) are a cryptographic tool that allow one to encrypt a message into the future, for a predetermined amount of time T. At present, we have only two constructions with provable security: One based on the repeated squaring assumption and the other based on indistinguishability obfuscation (iO). Basing TLP on any other assumption is a long-standing question, further motivated by the fact that known constructions are broken by quantum algorithms.
> 
> In this work, we propose a new approach to construct time-lock puzzles based on lattices, and therefore with plausible post-quantum security. We obtain the following main results:
> 
> In the preprocessing model, where a one-time public-coin preprocessing is allowed, we obtain a time-lock puzzle with encryption time \(\log (T)\).
> 
> In the plain model, where the encrypter does all the computation, we obtain a time-lock puzzle with encryption time \(\sqrt{T}\).
> 
> Both constructions assume the existence of any sequential function f, and the hardness of the circular small-secret learning with errors (LWE) problem.
> 
> At the heart of our results is a new construction of succinct randomized encodings (SRE) for T-folded repeated circuits, where the complexity of the encoding is \(\sqrt{T}\). This is the first construction of SRE where the overall complexity of the encoding algorithm is sublinear in the runtime T, and which is not based on iO. Using our SRE we directly obtain the first non-interactive RAM delegation scheme with sublinear complexity (in the number of steps T), again without iO. Finally, we also propose a new heuristic construction of SREs, and consequently of TLPs, with fully-efficient encoding complexity \(\log (T)\). Our scheme is inspired by iO techniques, but carefully sidesteps the regime of zeroizing attacks that plague lattice-based iO candidates.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_13](https://doi.org/10.1007/978-3-031-68382-4_13)
## Cryptanalysis of Algebraic Verifiable Delay Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)
### Authors
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Ben Fisch, Yale University, New Haven, USA
* Gottfried Herold, Ethereum Foundation, Bonn, Germany
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Gaëtan Leurent, INRIA, Paris, France
* María Naya-Plasencia, INRIA, Paris, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> Verifiable Delay Functions (VDF) are a class of cryptographic primitives aiming to guarantee a minimum computation time, even for an adversary with massive parallel computational power. They are useful in blockchain protocols, and several practical candidates have been proposed based on exponentiation in a large finite field: Sloth++, Veedo, MinRoot. The underlying assumption of these constructions is that computing an exponentiation \(x^e\) requires at least \(\log _2 e\) sequential multiplications.
> 
> In this work, we analyze the security of these algebraic VDF candidates. In particular, we show that the latency of exponentiation can be reduced using parallel computation, against the preliminary assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_14](https://doi.org/10.1007/978-3-031-68382-4_14)
## On the Practical CPAD Security of "exact" and Threshold FHE Schemes and Libraries.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)
### Authors
* Marina Checri, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Renaud Sirdey, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Aymen Boudguiga, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Jean-Paul Bultel, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
### Abstract
> In their Eurocrypt’21 seminal paper, Li and Micciancio presented a passive attack against the CKKS approximate FHE scheme and introduced the notion of \(\text {CPA}^{D}\) security. The current status quo is that this line of attacks does not apply to “exact” FHE. In this paper, we challenge this status quo by exhibiting a \(\text {CPA}^{D}\) key recovery attack on the linearly homomorphic Regev cryptosystem, which easily generalizes to other xHE schemes such as BFV, BGV and TFHE, showing that these cryptosystems are not \(\text {CPA}^{D}\) secure in their basic form. We also show that existing threshold variants of BFV, BGV and CKKS are particularly exposed to \(\text {CPA}^{D}\) attackers and would be \(\text {CPA}^{D}\)-insecure without proper smudging noise addition after partial decryption. Finally, we successfully implement our attack against several mainstream FHE libraries and discuss a number of natural countermeasures as well as their consequences in terms of FHE practice, security and efficiency. The attack itself is quite practical as it typically takes less than an hour on an average laptop PC, requiring a few thousand ciphertexts as well as up to around a million evaluations/decryptions, to perform a full key recovery.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_1](https://doi.org/10.1007/978-3-031-68382-4_1)
## Lossy Cryptography from Code-Based Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)
### Authors
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Over the past few decades, we have seen a proliferation of advanced cryptographic primitives with lossy or homomorphic properties built from various assumptions such as Quadratic Residuosity, Decisional Diffie-Hellman, and Learning with Errors. These primitives imply hard problems in the complexity class \(\mathcal {SZK}\) (statistical zero-knowledge); as a consequence, they can only be based on assumptions that are broken in \(\mathcal {BPP}^{\mathcal {SZK}}\). This poses a barrier for building advanced cryptography from code-based assumptions such as Learning Parity with Noise (LPN), as LPN is only known to be in \(\mathcal {BPP}^{\mathcal {SZK}}\) under an extremely low noise rate \(\frac{\log ^2 n}{n}\), for which it is broken in quasi-polynomial time.
> 
> In this work, we propose a new code-based assumption: Dense-Sparse LPN, that falls in the complexity class \(\mathcal {BPP}^{\mathcal {SZK}}\) and is conjectured to be secure against subexponential time adversaries. Our assumption is a variant of LPN that is inspired by McEliece’s cryptosystem and random \(k\text{- }\)XOR in average-case complexity. Roughly, the assumption states that
> 
> for a random (dense) matrix \(\textbf{T}\), random sparse matrix \(\textbf{M}\), and sparse noise vector \(\textbf{e}\) drawn from the Bernoulli distribution with inverse polynomial noise probability.
> 
> We leverage our assumption to build lossy trapdoor functions (Peikert-Waters STOC 08). This gives the first post-quantum alternative to the lattice-based construction in the original paper. Lossy trapdoor functions, being a fundamental cryptographic tool, are known to enable a broad spectrum of both lossy and non-lossy cryptographic primitives; our construction thus implies these primitives in a generic manner. In particular, we achieve collision-resistant hash functions with plausible subexponential security, improving over a prior construction from LPN with noise rate \(\frac{\log ^2 n}{n}\) that is only quasi-polynomially secure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_2](https://doi.org/10.1007/978-3-031-68382-4_2)
## Exploring the Advantages and Challenges of Fermat NTT in FHE Acceleration.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)
### Authors
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Sunmin Kwon, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Hyung Chul Kang, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Ahmet Can Mert, Graz University of Technology, Graz, Austria
* Anisha Mukherjee, Graz University of Technology, Graz, Austria
* Aikata Aikata, Graz University of Technology, Graz, Austria
* Sujoy Sinha Roy, Graz University of Technology, Graz, Austria
### Abstract
> Recognizing the importance of a fast and resource-efficient polynomial multiplication in homomorphic encryption, in this paper, we design a multiplier-less number theoretic transform using a Fermat number as an auxiliary modulus. To make this algorithm scalable with the degree of polynomial, we apply a univariate to multivariate polynomial ring transformation. We develop an accelerator architecture for fully homomorphic encryption using these algorithmic techniques for efficient multivariate polynomial multiplication. For practical homomorphic encryption application benchmarks, the hardware accelerator achieves a 1,200\(\times \) speed-up compared to software implementations. Finally, we conclude the paper by discussing the advantages and limitations of the proposed polynomial multiplication method.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_3](https://doi.org/10.1007/978-3-031-68382-4_3)
## Laconic Function Evaluation and ABE for RAMs from (Ring-)LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)
### Authors
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Hoeteck Wee, ENS, Paris, France
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> Laconic function evaluation (LFE) allows us to compress a circuit f into a short digest. Anybody can use this digest as a public-key to efficiently encrypt some input x. Decrypting the resulting ciphertext reveals the output f(x), while hiding everything else about x. In this work we consider LFE for Random-Access Machines (RAM-LFE) where, instead of a circuit f, we have a RAM program \(f_{\textsf{DB}}\) that potentially contains some large hard-coded data \(\textsf{DB}\). The decryption run-time to recover \(f_{\textsf{DB}}(x)\) from the ciphertext should be roughly the same as a plain evaluation of \(f_{\textsf{DB}}(x)\) in the RAM model, which can be sublinear in the size of \(\textsf{DB}\). Prior works constructed LFE for circuits under LWE, and RAM-LFE under indisitinguishability obfuscation (iO) and Ring-LWE. In this work, we construct RAM-LFE with essentially optimal encryption and decryption run-times from just Ring-LWE and a standard circular security assumption, without iO.
> 
> RAM-LFE directly yields 1-key succinct functional encryption and reusable garbling for RAMs with similar parameters.
> 
> If we only want an attribute-based LFE for RAMs (RAM-AB-LFE), then we can replace Ring-LWE with plain LWE in the above. Orthogonally, if we only want leveled schemes, where the encryption/decryption efficiency can scale with the depth of the RAM computation, then we can remove the need for a circular-security. Lastly, we also get a leveled many-key attribute-based encryption for RAMs (RAM-ABE), from LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_4](https://doi.org/10.1007/978-3-031-68382-4_4)
## Reducing the CRS Size in Registered ABE Systems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)
### Authors
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Attribute-based encryption (ABE) is a generalization of public-key encryption that enables fine-grained access control to encrypted data. In (ciphertext-policy) ABE, a central trusted authority issues decryption keys for attributes x to users. In turn, ciphertexts are associated with a decryption policy \(\ensuremath {\mathcal {P}}\). Decryption succeeds and recovers the encrypted message whenever \(\ensuremath {\mathcal {P}}(x) = 1\). Recently, Hohenberger, Lu, Waters, and Wu (Eurocrypt 2023) introduced the notion of registered ABE, which is an ABE scheme without a trusted central authority. Instead, users generate their own public/secret keys (just like in public-key encryption) and then register their keys (and attributes) with a key curator. The key curator is a transparent and untrusted entity.
> 
> Currently, the best pairing-based registered ABE schemes support monotone Boolean formulas and an a priori bounded number of users L. A major limitation of existing schemes is that they require a (structured) common reference string (CRS) of size \(L^2 \cdot |\ensuremath {\mathcal {U}}|\) where \(|\ensuremath {\mathcal {U}}|\) is the size of the attribute universe. In other words, the size of the CRS scales quadratically with the number of users and multiplicatively with the size of the attribute universe. The large CRS makes these schemes expensive in practice and limited to a small number of users and a small universe of attributes.
> 
> In this work, we give two ways to reduce the CRS size in pairing-based registered ABE schemes. First, we introduce a combinatoric technique based on progression-free sets that enables registered ABE for the same class of policies but with a CRS whose size is sub-quadratic in the number of users. Asymptotically, we obtain a scheme where the CRS size is nearly linear in the number of users L (i.e., \(L^{1 + o(1)}\)). If we take a more concrete-efficiency-oriented focus, we can instantiate our framework to obtain a construction with a CRS of size \(L^{\log _2 3} \approx L^{1.6}\). For instance, in a scheme for 100,000 users, our approach reduces the CRS by a factor of over \(115\times \) compared to previous approaches (and without incurring any overhead in encryption/decryption time). Our second approach for reducing the CRS size is to rely on a partitioning-based argument when arguing security of the registered ABE scheme. Previous approaches took a dual-system approach. Using a partitioning-based argument yields a registered ABE scheme where the size of the CRS is independent of the size of the attribute universe. The cost is the resulting scheme satisfies a weaker notion of static security. Our techniques for reducing the CRS size can be combined, and taken together, we obtain a pairing-based registered ABE scheme that supports monotone Boolean formulas with a CRS size of \(L^{1 + o(1)}\). Notably, this is the first pairing-based registered ABE scheme that does not require imposing a bound on the size of the attribute universe during setup time.
> 
> As an additional application, we also show how to apply our techniques based on progression-free sets to the batch argument (BARG) for \(\ensuremath {\textsf{NP}} \) scheme of Waters and Wu (Crypto 2022) to obtain a scheme with a nearly-linear CRS without needing to rely on non-black-box bootstrapping techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_5](https://doi.org/10.1007/978-3-031-68382-4_5)
## Circuit ABE with sfpoly( depth,λ )-Sized Ciphertexts and Keys from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)
### Authors
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
### Abstract
> We present new lattice-based attribute-based encryption (ABE) and laconic function evaluation (LFE) schemes for circuits with sublinear ciphertext overhead. For depth d circuits over \(\ell \)-bit inputs, we obtain
> 
> an ABE with ciphertext and secret key size O(1);
> 
> a LFE with ciphertext size \(\ell + O(1)\) and digest size O(1);
> 
> an ABE with public key and ciphertext size \(O(\ell ^{2/3})\) and secret key size O(1),
> 
> where \(O(\cdot )\) hides \(\textsf{poly}(d,\lambda )\) factors. The first two results achieve almost optimal ciphertext and secret key/digest sizes, up to the \(\textsf{poly}(d)\) dependencies. The security of our schemes relies on \(\ell \)-succinct LWE, a falsifiable assumption which is implied by evasive LWE. At the core of our results is a new technique for compressing LWE samples \(\textbf{s}(\textbf{A}-\textbf{x}\otimes \textbf{G})\) as well as the matrix \(\textbf{A}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_6](https://doi.org/10.1007/978-3-031-68382-4_6)
## A Systematic Study of Sparse LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)
### Authors
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Huijia Lin, Carnegie Mellon University, Pittsburgh, PA, USA
* Sagnik Saha, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Sagnik Saha, University of Washington, Seattle, WA, USA
### Abstract
> In this work, we introduce the sparse LWE assumption, an assumption that draws inspiration from both Learning with Errors (Regev JACM 10) and Sparse Learning Parity with Noise (Alekhnovich FOCS 02). Exactly like LWE, this assumption posits indistinguishability of \((\textbf{A}, \textbf{s}\textbf{A}+\textbf{e} \mod p)\) from \((\textbf{A}, \textbf{u})\) for a random \(\textbf{u}\) where the secret \(\textbf{s}\), and the error vector \(\textbf{e}\) is generated exactly as in LWE. However, the coefficient matrix \(\textbf{A}\) in sparse LPN is chosen randomly from \(\ensuremath {\mathbb {Z}}^{n\times m}_{p}\) so that each column has Hamming weight exactly k for some small k. We study the problem in the regime where k is a constant or polylogarithmic. The primary motivation for proposing this assumption is efficiency. Compared to LWE, the samples can be computed and stored with roughly O(n/k) factor improvement in efficiency. Our results can be summarized as:
> 
> Foundations: We show several properties of sparse LWE samples, including: 1) The hardness of LWE/LPN with dimension k implies the hardness of sparse LWE/LPN with sparsity k and arbitrary dimension \(n \ge k\). 2) When the number of samples \(m=\varOmega (n \log p)\), length of the shortest vector of a lattice spanned by rows of a random sparse matrix is large, close to that of a random dense matrix of the same dimension (up to a small constant factor). 3) Trapdoors with small polynomial norm exist for random sparse matrices with dimension \(n \times m = O(n \log p)\). 4) Efficient algorithms for sampling such matrices together with trapdoors exist when the dimension is \(n \times m = \ensuremath {\widetilde{\mathcal {O}}}(n^2)\).
> 
> Cryptanalysis: We examine the suite of algorithms that have been used to break LWE and sparse LPN. While naively many of the attacks that apply to LWE do not exploit sparsity, we consider natural extensions that make use of sparsity. We propose a model to capture all these attacks. Using this model we suggest heuristics on how to identify concrete parameters. Our initial cryptanalysis suggests that concretely sparse LWE with a modest k and slightly bigger dimension than LWE will satisfy similar level of security as LWE with similar parameters.
> 
> Applications: We show that the hardness of sparse LWE implies very efficient homomorphic encryption schemes for low degree computations. We obtain the first secret key Linearly Homomorphic Encryption (LHE) schemes with slightly super-constant, or even constant, overhead, which further has applications to private information retrieval, private set intersection, etc. We also obtain secret key homomorphic encryption for arbitrary constant-degree polynomials with slightly super-constant, or constant, overhead.
> 
> We stress that our results are preliminary. However, our results make a strong case for further investigation of sparse LWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_7](https://doi.org/10.1007/978-3-031-68382-4_7)
## How to Construct Quantum FHE, Generically.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)
### Authors
* Aparna Gupte, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### Abstract
> We construct a (compact) quantum fully homomorphic encryption (QFHE) scheme starting from any (compact) classical fully homomorphic encryption scheme with decryption in \(\textsf{NC}^{1}\), together with a dual-mode trapdoor function family. Compared to previous constructions (Mahadev, FOCS 2018; Brakerski, CRYPTO 2018) which made non-black-box use of similar underlying primitives, our construction provides a pathway to instantiations from different assumptions. Our construction uses the techniques of Dulek, Schaffner and Speelman (CRYPTO 2016) and shows how to make the client in their QFHE scheme classical using dual-mode trapdoor functions. As an additional contribution, we show a new instantiation of dual-mode trapdoor functions from group actions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_8](https://doi.org/10.1007/978-3-031-68382-4_8)
## A Modular Approach to Registered ABE for Unbounded Predicates.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)
### Authors
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Registered attribute-based encryption (Reg-ABE), introduced by Hohenberger et al. (Eurocrypt’23), emerges as a pivotal extension of attribute-based encryption (ABE), aimed at mitigating the key-escrow problem. Although several Reg-ABE schemes with black-box use of cryptography have been proposed so far, there remains a significant gap in the class of achievable predicates between vanilla ABE and Reg-ABE. To narrow this gap, we propose a modular framework for constructing Reg-ABE schemes for a broader class of predicates. Our framework is a Reg-ABE analog of the predicate transformation framework for ABE introduced by Attrapadung (Eurocrypt’19) and later refined by Attrapadung and Tomida (Asiacrypt’20) to function under the standard MDDH assumption. As immediate applications, our framework implies the following new Reg-ABE schemes under the standard MDDH assumption:
> 
> the first Reg-ABE scheme for (non-)monotone span programs with the traditional completely unbounded property.
> 
> the first Reg-ABE scheme for general non-monotone span programs (also with the completely unbounded property) as defined in the case of vanilla ABE by Attrapadung and Tomida (Asiacrypt’20).
> 
> Here, the term “completely unbounded” signifies the absence of restrictions on attribute sets for users and policies associated with ciphertexts.
> 
> From a technical standpoint, we first substantially modify pair encoding schemes (PES), originally devised for vanilla ABE by Attrapadung (Eurocrypt’14), to make them compatible with Reg-ABE. Subsequently, we present a series of predicate transformations through which we can construct complex predicates, particularly those with an “unbounded” characteristic, starting from simple ones. Finally, we define new properties of PES necessary for constructing Reg-ABE schemes and prove that these properties are preserved through the transformations. This immediately implies that we can obtain Reg-ABE schemes for any predicates derived via predicate transformations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_9](https://doi.org/10.1007/978-3-031-68382-4_9)
## Fully-Succinct Multi-key Homomorphic Signatures from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)
### Authors
* Gaspard Anthoine, IMDEA Software Institute, Madrid, Spain
* David Balbás, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Gaspard Anthoine, Universidad Politécnica de Madrid, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
### Abstract
> Multi-Key Homomorphic Signatures (MKHS) allow one to evaluate a function on data signed by distinct users while producing a succinct and publicly-verifiable certificate of the correctness of the result. All the constructions of MKHS in the state of the art achieve a weak level of succinctness where signatures are succinct in the total number of inputs but grow linearly with the number of users involved in the computation. The only exception is a SNARK-based construction which relies on a strong notion of knowledge soundness in the presence of signing oracles that not only requires non-falsifiable assumptions but also encounters some impossibility results.
> 
> In this work, we present the first construction of MKHS that are fully succinct (also with respect to the number of users) while achieving adaptive security under standard falsifiable assumptions. Our result is achieved through a novel combination of batch arguments for NP (BARGs) and functional commitments (FC), and yields diverse MKHS instantiations for circuits of unbounded depth based on either pairing or lattice assumptions. Additionally, our schemes support efficient verification with pre-processing, and they can easily be extended to achieve multi-hop evaluation and context-hiding.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_10](https://doi.org/10.1007/978-3-031-68382-4_10)
## Attribute Based Encryption for Turing Machines from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Shota Yamada, AIST Tokyo, Koto, Japan
### Abstract
> We provide the first attribute based encryption (ABE) scheme for Turing machines supporting unbounded collusions from lattice assumptions. In more detail, the encryptor encodes an attribute \(\textbf{x}\) together with a bound t on the machine running time and a message m into the ciphertext, the key generator embeds a Turing machine M into the secret key and decryption returns m if and only if \(M(\textbf{x})=1\). Crucially, the input \(\textbf{x}\) and machine M can be of unbounded size, the time bound t can be chosen dynamically for each input and decryption runs in input specific time.
> 
> Previously the best known ABE for uniform computation supported only non-deterministic log space Turing machines (\(\textsf{NL})\) from pairings (Lin and Luo, Eurocrypt 2020). In the post-quantum regime, the state of the art supports non-deterministic finite automata from LWE in the symmetric key setting (Agrawal, Maitra and Yamada, Crypto 2019).
> 
> In more detail, our results are:
> 
> 1. We construct the first ABE for \(\textsf{NL}\) from the LWE, evasive LWE (Wee, Eurocrypt 2022 and Tsabary, Crypto 2022) and Tensor LWE (Wee, Eurocrypt 2022) assumptions. This yields the first (conjectured) post-quantum ABE for \(\textsf{NL}\).
> 
> 2. Relying on LWE, evasive LWE and a new assumption called circular tensor LWE, we construct ABE for all Turing machines. At a high level, the circular tensor LWE assumption incorporates circularity into the tensor LWE (Wee, Eurocrypt 2022) assumption.
> 
> Towards our ABE for Turing machines, we obtain the first CP-ABE for circuits of unbounded depth and size from the same assumptions – this may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_11](https://doi.org/10.1007/978-3-031-68382-4_11)
## Plaintext-Ciphertext Matrix Multiplication and FHE Bootstrapping: Fast and Fused.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)
### Authors
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Guillaume Hanrot, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> Homomorphically multiplying a plaintext matrix with a ciphertext matrix (PC-MM) is a central task for the private evaluation of transformers, commonly used for large language models. We provide several RLWE-based algorithms for PC-MM that consist of multiplications of plaintext matrices (PP-MM) and comparatively cheap pre-processing and post-processing steps: for small and large dimensions compared to the RLWE ring degree, and with and without precomputation. For the algorithms with precomputation, we show how to perform a PC-MM with a single floating-point PP-MM of the same dimensions. This is particularly meaningful for practical purposes as a floating-point PP-MM can be implemented using high-performance BLAS libraries.
> 
> The algorithms rely on the multi-secret variant of RLWE, which allows to represent multiple ciphertexts more compactly. We give algorithms to convert from usual shared-secret RLWE ciphertexts to multi-secret ciphertexts and back. Further, we show that this format is compatible with homomorphic addition, plaintext-ciphertext multiplication, and key-switching. This in turn allows us to accelerate the slots-to-coeffs and coeffs-to-slots steps of CKKS bootstrapping when several ciphertexts are bootstrapped at once. Combining batch-bootstrapping with efficient PC-MM results in MaMBo(Matrix Multiplication Bootstrapping), a bootstrapping algorithm that can perform a PC-MM for a limited overhead.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_12](https://doi.org/10.1007/978-3-031-68382-4_12)
## Time-Lock Puzzles from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)
### Authors
* Shweta Agrawalr, IIT Madras, Chennai, India
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Ruhr University Bochum, Bochum, Germany
### Abstract
> Time-lock puzzles (TLP) are a cryptographic tool that allow one to encrypt a message into the future, for a predetermined amount of time T. At present, we have only two constructions with provable security: One based on the repeated squaring assumption and the other based on indistinguishability obfuscation (iO). Basing TLP on any other assumption is a long-standing question, further motivated by the fact that known constructions are broken by quantum algorithms.
> 
> In this work, we propose a new approach to construct time-lock puzzles based on lattices, and therefore with plausible post-quantum security. We obtain the following main results:
> 
> In the preprocessing model, where a one-time public-coin preprocessing is allowed, we obtain a time-lock puzzle with encryption time \(\log (T)\).
> 
> In the plain model, where the encrypter does all the computation, we obtain a time-lock puzzle with encryption time \(\sqrt{T}\).
> 
> Both constructions assume the existence of any sequential function f, and the hardness of the circular small-secret learning with errors (LWE) problem.
> 
> At the heart of our results is a new construction of succinct randomized encodings (SRE) for T-folded repeated circuits, where the complexity of the encoding is \(\sqrt{T}\). This is the first construction of SRE where the overall complexity of the encoding algorithm is sublinear in the runtime T, and which is not based on iO. Using our SRE we directly obtain the first non-interactive RAM delegation scheme with sublinear complexity (in the number of steps T), again without iO. Finally, we also propose a new heuristic construction of SREs, and consequently of TLPs, with fully-efficient encoding complexity \(\log (T)\). Our scheme is inspired by iO techniques, but carefully sidesteps the regime of zeroizing attacks that plague lattice-based iO candidates.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_13](https://doi.org/10.1007/978-3-031-68382-4_13)
## Cryptanalysis of Algebraic Verifiable Delay Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)
### Authors
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Ben Fisch, Yale University, New Haven, USA
* Gottfried Herold, Ethereum Foundation, Bonn, Germany
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Gaëtan Leurent, INRIA, Paris, France
* María Naya-Plasencia, INRIA, Paris, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> Verifiable Delay Functions (VDF) are a class of cryptographic primitives aiming to guarantee a minimum computation time, even for an adversary with massive parallel computational power. They are useful in blockchain protocols, and several practical candidates have been proposed based on exponentiation in a large finite field: Sloth++, Veedo, MinRoot. The underlying assumption of these constructions is that computing an exponentiation \(x^e\) requires at least \(\log _2 e\) sequential multiplications.
> 
> In this work, we analyze the security of these algebraic VDF candidates. In particular, we show that the latency of exponentiation can be reduced using parallel computation, against the preliminary assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_14](https://doi.org/10.1007/978-3-031-68382-4_14)
