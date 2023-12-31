# Eurocrypt[2023-3]
## A Theory of Composition for Differential Obliviousness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#a-theory-of-composition-for-differential-obliviousness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#a-theory-of-composition-for-differential-obliviousness)
### Authors
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* T.-H. Hubert Chan, The University of Hong Kong, Pokfulam, Hong Kong
* Shir Maimon, Cornell University, Ithaca, USA
### Abstract
> Differential obliviousness (DO) is a privacy notion which guarantees that the access patterns of a program satisfies differential privacy. Differential obliviousness was studied in a sequence of recent works as a relaxation of full obliviousness. Earlier works showed that DO not only allows us to circumvent the logarithmic-overhead barrier of fully oblivious algorithms, in many cases, it also allows us to achieve polynomial speedup over full obliviousness, since it avoids “padding to the worst-case” behavior of fully oblivious algorithms.
> 
> Despite the promises of differential obliviousness (DO), a significant barrier that hinders its broad application is the lack of composability. In particular, when we apply one DO algorithm to the output of another DO algorithm, the composed algorithm may no longer be DO (with reasonable parameters). Specifically, the outputs of the first DO algorithm on two neighboring inputs may no longer be neighboring, and thus we cannot directly benefit from the DO guarantee of the second algorithm.
> 
> In this work, we are the first to explore a theory of composition for differentially oblivious algorithms. We propose a refinement of the DO notion called \((\epsilon , \delta )\)-neighbor-preserving-DO, or \((\epsilon , \delta )\)-NPDO for short, and we prove that our new notion indeed provides nice compositional guarantees. In this way, the algorithm designer can easily track the privacy loss when composing multiple DO algorithms.
> 
> We give several example applications to showcase the power and expressiveness of our new NPDO notion. One of these examples is a result of independent interest: we use the compositional framework to prove an optimal privacy amplification theorem for the differentially oblivious shuffle model. In other words, we show that for a class of distributed differentially private mechanisms in the shuffle-model, one can replace the perfectly secure shuffler with a DO shuffler, and nonetheless enjoy almost the same privacy amplification enabled by a shuffler.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_1](https://doi.org/10.1007/978-3-031-30620-4_1)
## On Differential Privacy and Adaptive Data Analysis with Bounded Space.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-differential-privacy-and-adaptive-data-analysis-with-bounded-space)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-differential-privacy-and-adaptive-data-analysis-with-bounded-space)
### Authors
* Itai Dinur, Ben-Gurion University, Be’er Sheva, Israel
* Uri Stemmer, Tel Aviv University, Tel Aviv-Yafo, Israel
* Uri Stemmer, Google Research, Tel Aviv-Yafo, Israel
* David P. Woodruff, Carnegie Mellon University, Pittsburgh, USA
* Samson Zhou, UC Berkeley, Berkeley, USA
* Samson Zhou, Rice University, Houston, USA
### Abstract
> We study the space complexity of the two related fields of differential privacy and adaptive data analysis. Specifically,
> 
> 1. Under standard cryptographic assumptions, we show that there exists a problem P that requires exponentially more space to be solved efficiently with differential privacy, compared to the space needed without privacy. To the best of our knowledge, this is the first separation between the space complexity of private and non-private algorithms.
> 
> 2. The line of work on adaptive data analysis focuses on understanding the number of samples needed for answering a sequence of adaptive queries. We revisit previous lower bounds at a foundational level, and show that they are a consequence of a space bottleneck rather than a sampling bottleneck.
> 
> To obtain our results, we define and construct an encryption scheme with multiple keys that is built to withstand a limited amount of key leakage in a very particular way.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_2](https://doi.org/10.1007/978-3-031-30620-4_2)
## Deniable Authentication When Signing Keys Leak.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#deniable-authentication-when-signing-keys-leak)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#deniable-authentication-when-signing-keys-leak)
### Authors
* Suvradip Chakraborty, Visa Research, Palo Alto, USA
* Dennis Hofheinz, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### Abstract
> Deniable Authentication is a highly desirable property for secure messaging protocols: it allows a sender Alice to authentically transmit messages to a designated receiver Bob in such a way that only Bob gets convinced that Alice indeed sent these messages. In particular, it guarantees that even if Bob tries to convince a (non-designated) party Judy that Alice sent some message, and even if Bob gives Judy his own secret key, Judy will not be convinced: as far as Judy knows, Bob could be making it all up!
> 
> In this paper we study Deniable Authentication in the setting where Judy can additionally obtain Alice’s secret key. Informally, we want that knowledge of Alice’s secret key does not help Judy in learning whether Alice sent any messages, even if Bob does not have Alice’s secret key and even if Bob cooperates with Judy by giving her his own secret key. This stronger flavor of Deniable Authentication was not considered before and is particularly relevant for Group Messaging as it gives users stronger deniability guarantees.
> 
> Our main contribution is a scalable “” () scheme—a technical formalization of Deniable Authentication that is particularly useful for secure messaging for its confidentiality guarantees—that provides this stronger deniability guarantee. At its core lie new \(\mathrm { M{\textrm{DVS}}}\) (Multi-Designated Verifier Signature) and \(\text {PKEBC}\) (Public Key Encryption for Broadcast) scheme constructions: our \(\mathrm { M{\textrm{DVS}}}\) is not only secure with respect to the new deniability notions, but it is also the first to be tightly secure under standard assumptions; our \(\text {PKEBC}\)—which is also of independent interest—is the first with ciphertext sizes and encryption and decryption times that grow only linearly in the number of receivers. This is a significant improvement upon the construction given by Maurer et al. (EUROCRYPT ’22), where ciphertext sizes and encryption and decryption times are quadratic in the number of receivers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_3](https://doi.org/10.1007/978-3-031-30620-4_3)
## Let Attackers Program Ideal Models: Modularity and Composability for Adaptive Compromise.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#let-attackers-program-ideal-models-modularity-and-composability-for-adaptive-compromise)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#let-attackers-program-ideal-models-modularity-and-composability-for-adaptive-compromise)
### Authors
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, USA
### Abstract
> We show that the adaptive compromise security definitions of Jaeger and Tyagi (Crypto ’20) cannot be applied in several natural use-cases. These include proving multi-user security from single-user security, the security of the cascade PRF, and the security of schemes sharing the same ideal primitive. We provide new variants of the definitions and show that they resolve these issues with composition. Extending these definitions to the asymmetric settings, we establish the security of the modular KEM/DEM and Fujisaki-Okamoto approaches to public key encryption in the full adaptive compromise setting. This allows instantiations which are more efficient and standard than prior constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_4](https://doi.org/10.1007/978-3-031-30620-4_4)
## Almost Tight Multi-user Security Under Adaptive Corruptions & Leakages in the Standard Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#almost-tight-multi-user-security-under-adaptive-corruptions-leakages-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#almost-tight-multi-user-security-under-adaptive-corruptions-leakages-in-the-standard-model)
### Authors
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### Abstract
> In this paper, we consider tight multi-user security under adaptive corruptions, where the adversary can adaptively corrupt some users and obtain their secret keys. We propose generic constructions for a bunch of primitives, and the instantiations from the matrix decisional Diffie-Hellman (MDDH) assumptions yield the following schemes:
> 
> (1) the first digital signature (SIG) scheme achieving almost tight strong EUF-CMA security in the multi-user setting with adaptive corruptions in the standard model;
> 
> (2) the first public-key encryption (PKE) scheme achieving almost tight IND-CCA security in the multi-user multi-challenge setting with adaptive corruptions in the standard model;
> 
> (3) the first signcryption (SC) scheme achieving almost tight privacy and authenticity under CCA attacks in the multi-user multi-challenge setting with adaptive corruptions in the standard model.
> 
> As byproducts, our SIG and SC naturally derive the first strongly secure message authentication code (MAC) and the first authenticated encryption (AE) schemes achieving almost tight multi-user security under adaptive corruptions in the standard model. We further optimize constructions of SC, MAC and AE to admit better efficiency.
> 
> Furthermore, we consider key leakages besides corruptions, as a natural strengthening of tight multi-user security under adaptive corruptions. This security considers a more natural and more complete “all-or-part-or-nothing” setting, where secret keys of users are either fully exposed to adversary (“all”), or completely hidden to adversary (“nothing”), or partially leaked to adversary (“part”), and it protects the uncorrupted users even with bounded key leakages. All our schemes additionally support bounded key leakages and enjoy full compactness. This yields the first SIG, PKE, SC, MAC, AE schemes achieving almost tight multi-user security under both adaptive corruptions and leakages.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_5](https://doi.org/10.1007/978-3-031-30620-4_5)
## Privately Puncturing PRFs from Lattices: Adaptive Security and Collusion Resistant Pseudorandomness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#privately-puncturing-prfs-from-lattices-adaptive-security-and-collusion-resistant-pseudorandomness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#privately-puncturing-prfs-from-lattices-adaptive-security-and-collusion-resistant-pseudorandomness)
### Authors
* Rupeng Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### Abstract
> A private puncturable pseudorandom function (PRF) enables one to create a constrained version of a PRF key, which can be used to evaluate the PRF at all but some punctured points. In addition, the constrained key reveals no information about the punctured points and the PRF values on them. Existing constructions of private puncturable PRFs are only proven to be secure against a restricted adversary that must commit to the punctured points before viewing any information. It is an open problem to achieve the more natural adaptive security, where the adversary can make all its choices on-the-fly.
> 
> In this work, we solve the problem by constructing an adaptively secure private puncturable PRF from standard lattice assumptions. To achieve this goal, we present a new primitive called explainable hash, which allows one to reprogram the hash function on a given input. The new primitive may find further applications in constructing more cryptographic schemes with adaptive security. Besides, our construction has collusion resistant pseudorandomness, which requires that even given multiple constrained keys, no one could learn the values of the PRF at the punctured points. Private puncturable PRFs with collusion resistant pseudorandomness were only known from multilinear maps or indistinguishability obfuscations in previous works, and we provide the first solution from standard lattice assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_6](https://doi.org/10.1007/978-3-031-30620-4_6)
## Constrained Pseudorandom Functions from Homomorphic Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#constrained-pseudorandom-functions-from-homomorphic-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#constrained-pseudorandom-functions-from-homomorphic-secret-sharing)
### Authors
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Reichman University, Herzliya, Israel
* Alain Passelègue, Inria, Paris, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Paris, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Paris, France
### Abstract
> We propose and analyze a simple strategy for constructing 1-key constrained pseudorandom functions (CPRFs) from homomorphic secret sharing. In the process, we obtain the following contributions: first, we identify desirable properties for the underlying HSS scheme for our strategy to work. Second, we show that (most of) recent existing HSS schemes satisfy these properties, leading to instantiations of CPRFs for various constraints and from various assumptions. Notably, we obtain the first (1-key selectively secure, private) CPRFs for inner-product and (1-key selectively secure) CPRFs for \(\textsf{NC}^1\) from the DCR assumption, and more. Last, we revisit two applications of HSS equipped with these additional properties to secure computation: we obtain secure computation in the silent preprocessing model with one party being able to precompute its whole preprocessing material before even knowing the other party, and we construct one-sided statistically secure computation with sublinear communication for restricted forms of computation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_7](https://doi.org/10.1007/978-3-031-30620-4_7)
## Efficient FHEW Bootstrapping with Small Evaluation Keys, and Applications to Threshold Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#efficient-fhew-bootstrapping-with-small-evaluation-keys-and-applications-to-threshold-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#efficient-fhew-bootstrapping-with-small-evaluation-keys-and-applications-to-threshold-homomorphic-encryption)
### Authors
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Rakyong Choi, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Jieun Eom, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Donghoon Yoo, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Daniele Micciancio, University of California, San Diego, USA
### Abstract
> There are two competing approaches to bootstrap the FHEW fully homomorphic encryption scheme (Ducas and Micciancio, Eurocrypt 2015) and its variants: the original AP/FHEW method, which supports arbitrary secret key distributions, and the improved GINX/TFHE method, which uses much smaller evaluation keys, but is directly applicable only to binary secret keys, restricting the scheme’s applicability.
> 
> In this paper, we present a new bootstrapping procedure for FHEW-like encryption schemes that achieves the best features of both methods: support for arbitrary secret key distributions at no additional runtime costs, while using small evaluation keys. (Support for arbitrary secret keys is critical in a number of important applications, like threshold and some multi-key homomorphic encryption schemes.) As an added benefit, our new bootstrapping procedure results in smaller noise growth than both AP and GINX, regardless of the key distribution.
> 
> Our improvements are both theoretically significant (offering asymptotic savings, up to a \(O(\log n)\) multiplicative factor, either on the running time or public evaluation key size), and practically relevant. For example, for a concrete 128-bit target security level, we show how to decrease the evaluation key size of the best previously known scheme by more than 30%, while also slightly reducing the running time. We demonstrate the practicality of the proposed methods by building a prototype implementation within the PALISADE/OpenFHE open-source homomorphic encryption library. We provide optimized parameter sets and implementation results showing that the proposed algorithm has the best performance among all known FHEW bootstrapping methods in terms of runtime and key size. We illustrate the benefits of our method by sketching a simple construction of threshold homomorphic encryption based on FHEW.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_8](https://doi.org/10.1007/978-3-031-30620-4_8)
## On Polynomial Functions Modulo pe and Faster Bootstrapping for Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-polynomial-functions-modulo-pe-and-faster-bootstrapping-for-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-polynomial-functions-modulo-pe-and-faster-bootstrapping-for-homomorphic-encryption)
### Authors
* Robin Geelen, imec-COSIC, KU Leuven, Leuven, Belgium
* Jiayi Kang, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Ilia Iliashenko, CipherMode Labs, Los Angeles, USA
### Abstract
> In this paper, we perform a systematic study of functions \(f: \mathbb {Z}_{p^e} \rightarrow \mathbb {Z}_{p^e}\) and categorize those functions that can be represented by a polynomial with integer coefficients. More specifically, we cover the following properties: necessary and sufficient conditions for the existence of an integer polynomial representation; computation of such a representation; and the complete set of equivalent polynomials that represent a given function.
> 
> As an application, we use the newly developed theory to speed up bootstrapping for the BGV and BFV homomorphic encryption schemes. The crucial ingredient underlying our improvements is the existence of null polynomials, i.e. non-zero polynomials that evaluate to zero in every point. We exploit the rich algebraic structure of these null polynomials to find better representations of the digit extraction function, which is the main bottleneck in bootstrapping. As such, we obtain sparse polynomials that have 50% fewer coefficients than the original ones. In addition, we propose a new method to decompose digit extraction as a series of polynomial evaluations. This lowers the time complexity from \(\mathcal {O}(\sqrt{pe})\) to \(\mathcal {O}(\sqrt{p}\root ^4 \of {e})\) for digit extraction modulo \(p^e\), at the cost of a slight increase in multiplicative depth. Overall, our implementation in HElib shows a significant speedup of a factor up to 2.6 over the state-of-the-art.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_9](https://doi.org/10.1007/978-3-031-30620-4_9)
## Functional Commitments for All Functions, with Transparent Setup and from SIS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#functional-commitments-for-all-functions-with-transparent-setup-and-from-sis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#functional-commitments-for-all-functions-with-transparent-setup-and-from-sis)
### Authors
* Leo de Castro, EECS, Massachusetts Institute of Technology, Cambridge, USA
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### Abstract
> A functional commitment scheme enables a user to concisely commit to a function from a specified family, then later concisely and verifiably reveal values of the function at desired inputs. Useful special cases, which have seen applications across cryptography, include vector commitments and polynomial commitments.
> 
> To date, functional commitments have been constructed (under falsifiable assumptions) only for functions that are essentially linear, with one recent exception that works for arbitrarily complex functions. However, that scheme operates in a strong and non-standard model, requiring an online, trusted authority to generate special keys for any opened function inputs.
> 
> In this work, we give the first functional commitment scheme for nonlinear functions—indeed, for all functions of any bounded complexity—under a standard setup and a falsifiable assumption. Specifically, the setup is “transparent,” requiring only public randomness (and not any trusted entity), and the assumption is the hardness of the standard Short Integer Solution (SIS) lattice problem. Our construction also has other attractive features, including: stateless updates via generic composability; excellent asymptotic efficiency for the verifier, and also for the committer in important special cases like vector and polynomial commitments, via preprocessing; and post-quantum security, since it is based on SIS.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_10](https://doi.org/10.1007/978-3-031-30620-4_10)
## Batch Bootstrapping I: - A New Framework for SIMD Bootstrapping in Polynomial Modulus.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-i-a-new-framework-for-simd-bootstrapping-in-polynomial-modulus)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-i-a-new-framework-for-simd-bootstrapping-in-polynomial-modulus)
### Authors
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Han Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Science, Beijing, China
* Han Wang, School of Cyber Security, University of Chinese Academy of Science, Beijing, China
### Abstract
> In this series of work, we aim at improving the bootstrapping paradigm for fully homomorphic encryption (FHE). Our main goal is to show that the amortized cost of bootstrapping within a polynomial modulus only requires \(\tilde{O}(1)\) FHE multiplications.
> 
> To achieve this, we develop substantial algebraic techniques in two papers. Particularly, the first one (this work) proposes a new mathematical framework for batch homomorphic computation that is compatible with the existing bootstrapping methods of AP14/FHEW/TFHE. To show that our overall method requires only a polynomial modulus, we develop a critical algebraic analysis over noise growth, which might be of independent interest. Overall, the framework yields an amortized complexity \(\tilde{O}(\lambda ^{0.75})\) FHE multiplications, where \(\lambda \) is the security parameter. This improves the prior methods of AP14/FHEW/TFHE, which required \(O(\lambda )\) FHE multiplications in amortization.
> 
> Developing many substantial new techniques based on the foundation of this work, the sequel (Bootstrapping II, Eurocrypt 2023) shows how to further improve the recursive bootstrapping method of MS18 (Micciancio and Sorrell, ICALP 2018), yielding a substantial theoretical improvement that can potentially lead to more practical methods.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_11](https://doi.org/10.1007/978-3-031-30620-4_11)
## Batch Bootstrapping II: - Bootstrapping in Polynomial Modulus only Requires O~(1)\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\tilde{O}(1)$$\end{document} FHE Multiplications in Amortization.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-ii-bootstrapping-in-polynomial-modulus-only-requires-o-1-documentclass-12pt-minimal-usepackage-amsmath-usepackage-wasysym-usepackage-amsfonts-usepackage-amssymb-usepackage-amsbsy-usepackage-mathrsfs-usepackage-upgreek-setlength-oddsidemargin-69pt-begin-document-tilde-o-1-end-document-fhe-multiplications-in-amortization)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-ii-bootstrapping-in-polynomial-modulus-only-requires-o-1-documentclass-12pt-minimal-usepackage-amsmath-usepackage-wasysym-usepackage-amsfonts-usepackage-amssymb-usepackage-amsbsy-usepackage-mathrsfs-usepackage-upgreek-setlength-oddsidemargin-69pt-begin-document-tilde-o-1-end-document-fhe-multiplications-in-amortization)
### Authors
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Han Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Science, Beijing, China
* Han Wang, School of Cyber Security, University of Chinese Academy of Science, Beijing, China
### Abstract
> This work continues the exploration of the batch framework proposed in Batch Bootstrapping I (Liu and Wang, Eurocrypt 2023). By further designing novel batch homomorphic algorithms based on the batch framework, this work shows how to bootstrap \(\lambda \) LWE input ciphertexts within a polynomial modulus, using \(\tilde{O}(\lambda )\) FHE multiplications. This implies an amortized complexity \(\tilde{O}(1)\) FHE multiplications per input ciphertext, significantly improving our first work (whose amortized complexity is \(\tilde{O}(\lambda ^{0.75})\)) and the theoretical state of the art MS18 (Micciancio and Sorrell, ICALP 2018), whose amortized complexity is \(O(3^{1/\epsilon } \cdot \lambda ^{\epsilon })\), for any arbitrary constant \(\epsilon \).
> 
> We believe that all our new homomorphic algorithms might be useful in general applications, and thus can be of independent interests.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_12](https://doi.org/10.1007/978-3-031-30620-4_12)
## Succinct Vector, Polynomial, and Functional Commitments from Lattices.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#succinct-vector-polynomial-and-functional-commitments-from-lattices)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#succinct-vector-polynomial-and-functional-commitments-from-lattices)
### Authors
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> Vector commitment schemes allow a user to commit to a vector of values \(\textbf{x}\in \{0,1\}^\ell \) and later, open up the commitment to a specific set of positions. Both the size of the commitment and the size of the opening should be succinct (i.e., polylogarithmic in the length \(\ell \) of the vector). Vector commitments and their generalizations to polynomial commitments and functional commitments are key building blocks for many cryptographic protocols.
> 
> We introduce a new framework for constructing non-interactive lattice-based vector commitments and their generalizations. A simple instantiation of our framework yields a new vector commitment scheme from the standard short integer solution (SIS) assumption that supports private openings and large messages. We then show how to use our framework to obtain the first succinct functional commitment scheme that supports openings with respect to arbitrary bounded-depth Boolean circuits. In this scheme, a user commits to a vector \(\textbf{x}\in \{0,1\}^\ell \), and later on, open the commitment to any function \(f(\textbf{x})\). Both the commitment and the opening are non-interactive and succinct: namely, they have size \(\textsf{poly}(\lambda , d, \log \ell )\), where \(\lambda \) is the security parameter and d is the depth of the Boolean circuit computing f. Previous constructions of functional commitments could only support constant-degree polynomials, or require a trusted online authority, or rely on non-falsifiable assumptions. The security of our functional commitment scheme is based on a new falsifiable family of “basis-augmented” SIS assumptions (\(\textsf{BASIS}\)) we introduce in this work.
> 
> We also show how to use our vector commitment framework to obtain (1) a polynomial commitment scheme where the user can commit to a polynomial \(f \in \mathbb {Z}_{q}[x]\) and subsequently open the commitment to an evaluation \(f(x) \in \mathbb {Z}_{q}\); and (2) an aggregatable vector (resp., functional) commitment where a user can take a set of openings to multiple indices (resp., function evaluations) and aggregate them into a single short opening. Both of these extensions rely on the same \(\textsf{BASIS}\) assumption we use to obtain our succinct functional commitment scheme.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_13](https://doi.org/10.1007/978-3-031-30620-4_13)
## Efficient Laconic Cryptography from Learning with Errors.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#efficient-laconic-cryptography-from-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#efficient-laconic-cryptography-from-learning-with-errors)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Chuanwei Lin, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politecnica de Madrid, Madrid, Spain
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Laconic cryptography is an emerging paradigm that enables cryptographic primitives with sublinear communication complexity in just two messages. In particular, a two-message protocol between Alice and Bob is called laconic if its communication and computation complexity are essentially independent of the size of Alice’s input. This can be thought of as a dual notion of fully-homomorphic encryption, as it enables “Bob-optimized” protocols. This paradigm has led to tremendous progress in recent years. However, all existing constructions of laconic primitives are considered only of theoretical interest: They all rely on non-black-box cryptographic techniques, which are highly impractical.
> 
> This work shows that non-black-box techniques are not necessary for basic laconic cryptography primitives. We propose a completely algebraic construction of laconic encryption, a notion that we introduce in this work, which serves as the cornerstone of our framework. We prove that the scheme is secure under the standard Learning With Errors assumption (with polynomial modulus-to-noise ratio). We provide proof-of-concept implementations for the first time for laconic primitives, demonstrating the construction is indeed practical: For a database size of \(2^{50}\), encryption and decryption are in the order of single digit milliseconds.
> 
> Laconic encryption can be used as a black box to construct other laconic primitives. Specifically, we show how to construct:
> 
> Laconic oblivious transfer
> 
> Registration-based encryption scheme
> 
> Laconic private-set intersection protocol
> 
> All of the above have essentially optimal parameters and similar practical efficiency. Furthermore, our laconic encryption can be preprocessed such that the online encryption step is entirely combinatorial and therefore much more efficient. Using similar techniques, we also obtain identity-based encryption with an unbounded identity space and tight security proof (in the standard model).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_14](https://doi.org/10.1007/978-3-031-30620-4_14)
## Fully Adaptive Decentralized Multi-Authority ABE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#fully-adaptive-decentralized-multi-authority-abe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#fully-adaptive-decentralized-multi-authority-abe)
### Authors
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Brent Waters, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Brent Waters, University of Texas at Austin, Austin, TX, 78712, USA
### Abstract
> Decentralized multi-authority attribute-based encryption (\(\textsf{MA}\text {-}\textsf{ABE}\)) is a distributed generalization of standard (ciphertext-policy) attribute-based encryption where there is no trusted central authority: any party can become an authority and issue private keys, and there is no requirement for any global coordination other than the creation of an initial set of common reference parameters.
> 
> We present the first multi-authority attribute-based encryption schemes that are provably fully-adaptively secure. Namely, our construction is secure against an attacker that may corrupt some of the authorities as well as perform key queries adaptively throughout the life-time of the system. Our main construction relies on a prime order bilinear group where the k-linear assumption holds as well as on a random oracle. Along the way, we present a conceptually simpler construction relying on a composite order bilinear group with standard subgroup decision assumptions as well as on a random oracle.
> 
> Prior to this work, there was no construction that could resist adaptive corruptions of authorities, no matter the assumptions used. In fact, we point out that even standard complexity leveraging style arguments do not work in the multi-authority setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_15](https://doi.org/10.1007/978-3-031-30620-4_15)
## On the Optimal Succinctness and Efficiency of Functional Encryption and Attribute-Based Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-the-optimal-succinctness-and-efficiency-of-functional-encryption-and-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-the-optimal-succinctness-and-efficiency-of-functional-encryption-and-attribute-based-encryption)
### Authors
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We investigate the best-possible (asymptotic) efficiency of functional encryption (FE) and attribute-based encryption (ABE) by proving inherent space-time trade-offs and constructing nearly optimal schemes. We consider the general notion of partially hiding functional encryption (PHFE), capturing both FE and ABE, and the most efficient computation model of random-access machine (RAM). In PHFE, a secret key \(\textsf{sk}_f\) is associated with a function f, whereas a ciphertext \(\textsf{ct}_x(y)\) is tied to a public input x and encrypts a private input y. Decryption reveals f(x, y) and nothing else about y.
> 
> We present the first PHFE for RAM solely based on the necessary assumption of FE for circuits. Significantly improving upon the efficiency of prior schemes, our construction achieves nearly optimal succinctness and computation time:
> 
> Its secret key \(\textsf{sk}_f\) is of constant size (optimal), independent of the function description length |f|, i.e., \({|\textsf{sk}_f|={\text {poly}}(\lambda )}\).
> 
> Its ciphertext \(\textsf{ct}_x(y)\) is rate-2 in the private input length |y| (nearly optimal) and independent of the public input length |x| (optimal), i.e., \({|\textsf{ct}_x(y)|=2|y|+{\text {poly}}(\lambda )}\).
> 
> Decryption time is linear in the instance running time T of the RAM computation, plus the function and public/private input lengths, i.e., \({T_\textsf{Dec}=(T+|f|+|x|+|y|){\text {poly}}(\lambda )}\).
> 
> As a corollary, we obtain the first ABE with both keys and ciphertexts being constant-size, while enjoying the best-possible decryption time matching the lower bound by Luo [ePrint ’22]. We also separately achieve several other optimal ABE subject to the known lower bound.
> 
> We study the barriers to further efficiency improvements. We prove the first unconditional space-time trade-offs for (PH-)FE:
> 
> No secure (PH-)FE can have \(|\textsf{sk}_f|\) and \(T_\textsf{Dec}\) both sublinear in |f|.
> 
> No secure PHFE can have \(|\textsf{ct}_x(y)|\) and \(T_\textsf{Dec}\) both sublinear in |x|.
> 
> Our lower bounds apply even to the weakest secret-key 1-key 1-ciphertext selective schemes. Furthermore, we show a conditional barrier towards the optimal decryption time \({T_\textsf{Dec}=T{\text {poly}}(\lambda )}\) while keeping linear size dependency — any such (PH-)FE scheme implies doubly efficient private information retrieval (DE-PIR) with linear-size preprocessed database, for which so far there is no candidate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_16](https://doi.org/10.1007/978-3-031-30620-4_16)
## Registered Attribute-Based Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#registered-attribute-based-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#registered-attribute-based-encryption)
### Authors
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Attribute-based encryption (ABE) generalizes public-key encryption and enables fine-grained control to encrypted data. However, ABE upends the traditional trust model of public-key encryption by requiring a single trusted authority to issue decryption keys. If an adversary compromises the central authority and exfiltrates its secret key, then the adversary can decrypt every ciphertext in the system.
> 
> This work introduces registered ABE, a primitive that allows users to generate secret keys on their own and then register the associated public key with a “key curator” along with their attributes. The key curator aggregates the public keys from the different users into a single compact master public key. To decrypt, users occasionally need to obtain helper decryption keys from the key curator which they combine with their own secret keys. We require that the size of the aggregated public key, the helper decryption keys, the ciphertexts, as well as the encryption/decryption times to be polylogarithmic in the number of registered users. Moreover, the key curator is entirely transparent and maintains no secrets. Registered ABE generalizes the notion of registration-based encryption (RBE) introduced by Garg et al. (TCC 2018), who focused on the simpler setting of identity-based encryption.
> 
> We construct a registered ABE scheme that supports an a priori bounded number of users and policies that can be described by a linear secret sharing scheme (e.g., monotone Boolean formulas) from assumptions on composite-order pairing groups. Our approach deviates sharply from previous techniques for constructing RBE and only makes black-box use of cryptography. All existing RBE constructions (a weaker notion than registered ABE) rely on heavy non-black-box techniques. The encryption and decryption costs of our construction are comparable to those of vanilla pairing-based ABE. Two limitations of our scheme are that it requires a structured reference string whose size scales quadratically with the number of users (and linearly with the size of the attribute universe) and the running time of registration scales linearly with the number of users.
> 
> Finally, as a feasibility result, we construct a registered ABE scheme that supports general policies and an arbitrary number of users from indistinguishability obfuscation and somewhere statistically binding hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_17](https://doi.org/10.1007/978-3-031-30620-4_17)
## Unbounded Quadratic Functional Encryption and More from Pairings.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#unbounded-quadratic-functional-encryption-and-more-from-pairings)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#unbounded-quadratic-functional-encryption-and-more-from-pairings)
### Authors
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> We propose the first unbounded functional encryption (FE) scheme for quadratic functions and its extension, in which the sizes of messages to be encrypted are not a priori bounded. Prior to our work, all FE schemes for quadratic functions are bounded, meaning that the message length is fixed at the setup. In the first scheme, encryption takes \(\{x_{i}\}_{i \in S_{c}}\), key generation takes \(\{c_{i,j}\}_{i,j \in S_{k}}\), and decryption outputs \(\sum _{i,j \in S_{k}} c_{i,j}x_{i}x_{j}\) if and only if \(S_{k} \subseteq S_{c}\), where the sizes of \(S_{c}\) and \(S_{k}\) can be arbitrary. Our second scheme is the extension of the first scheme to partially-hiding FE that computes an arithmetic branching program on a public input and a quadratic function on a private input. Concretely, encryption takes a public input \(\textbf{u}\) in addition to \(\{x_{i}\}_{i \in S_{c}}\), a secret key is associated with arithmetic branching programs \(\{f_{i,j}\}_{i,j \in S_{k}}\), and decryption yields \(\sum _{i,j \in S_{k}} f_{i,j}(\textbf{u})x_{i}x_{j}\) if and only if \(S_{k} \subseteq S_{c}\). Both our schemes are based on pairings and secure in the simulation-based model under the standard MDDH assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_18](https://doi.org/10.1007/978-3-031-30620-4_18)
## Multi-key and Multi-input Predicate Encryption from Learning with Errors.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#multi-key-and-multi-input-predicate-encryption-from-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#multi-key-and-multi-input-predicate-encryption-from-learning-with-errors)
### Authors
* Danilo Francati, Aarhus University, Aarhus, Denmark
* Daniele Friolo, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> We put forward two natural generalizations of predicate encryption (PE), dubbed multi-key and multi-input PE. More in details, our contributions are threefold.
> 
> Definitions. We formalize security of multi-key PE and multi-input PE following the standard indistinguishability paradigm, and modeling security both against malicious senders (i.e., corruption of encryption keys) and malicious receivers (i.e., collusions).
> 
> Constructions. We construct adaptively secure multi-key and multi-input PE supporting the conjunction of poly-many arbitrary single-input predicates, assuming the sub-exponential hardness of the learning with errors (LWE) problem.
> 
> Applications. We show that multi-key and multi-input PE for expressive enough predicates suffices for interesting cryptographic applications, including non-interactive multi-party computation (NI-MPC) and matchmaking encryption (ME).
> 
> In particular, plugging in our constructions of multi-key and multi-input PE, under the sub-exponential LWE assumption, we obtain the first ME supporting arbitrary policies with unbounded collusions, as well as robust (resp. non-robust) NI-MPC for so-called all-or-nothing functions satisfying a non-trivial notion of reusability and supporting a constant (resp. polynomial) number of parties. Prior to our work, both of these applications required much heavier tools such as indistinguishability obfuscation or compact functional encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_19](https://doi.org/10.1007/978-3-031-30620-4_19)
## Broadcast, Trace and Revoke with Optimal Parameters from Polynomial Hardness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#broadcast-trace-and-revoke-with-optimal-parameters-from-polynomial-hardness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#broadcast-trace-and-revoke-with-optimal-parameters-from-polynomial-hardness)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, AIST, Tokyo, Japan
### Abstract
> A broadcast, trace and revoke system generalizes broadcast encryption as well as traitor tracing. In such a scheme, an encryptor can specify a list \(L \subseteq N\) of revoked users so that (i) users in L can no longer decrypt ciphertexts, (ii) ciphertext size is independent of L, (iii) a pirate decryption box supports tracing of compromised users. The “holy grail” of this line of work is a construction which resists unbounded collusions, achieves all parameters (including public and secret key) sizes independent of |L| and |N|, and is based on polynomial hardness assumptions. In this work we make the following contributions:
> 
> 1. Public Trace Setting: We provide a construction which (i) achieves optimal parameters, (ii) supports embedding identities (from an exponential space) in user secret keys, (iii) relies on polynomial hardness assumptions, namely compact functional encryption (\(\textsf{FE}\)) and a key-policy attribute based encryption (\({\textsf{ABE}}\)) with special efficiency properties, and (iv) enjoys adaptive security with respect to the revocation list. The previous best known construction by Nishimaki, Wichs and Zhandry (Eurocrypt 2016) which achieved optimal parameters and embedded identities, relied on indistinguishability obfuscation, which is considered an inherently subexponential assumption and achieved only selective security with respect to the revocation list.
> 
> 2. Secret Trace Setting: We provide the first construction with optimal ciphertext, public and secret key sizes and embedded identities from any assumption outside Obfustopia. In detail, our construction relies on Lockable Obfuscation which can be constructed using \(\textsf{LWE}\) (Goyal, Koppula, Waters and Wichs, Zirdelis, Focs 2017) and two \({\textsf{ABE}}\) schemes: (i) the key-policy scheme with special efficiency properties by Boneh et al. (Eurocrypt 2014) and (ii) a ciphertext-policy \({\textsf{ABE}}\) for \(\textsf{P}\) which was recently constructed by Wee (Eurocrypt 2022) using a new assumption called evasive and tensor \(\textsf{LWE}\). This assumption, introduced to build an \({\textsf{ABE}}\), is believed to be much weaker than lattice based assumptions underlying \(\textsf{FE}\) or \(\textsf{iO}\) – in particular it is required even for lattice based broadcast, without trace. Moreover, by relying on subexponential security of \(\textsf{LWE}\), both our constructions can also support a super-polynomial sized revocation list, so long as it allows efficient representation and membership testing. Ours is the first work to achieve this, to the best of our knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_20](https://doi.org/10.1007/978-3-031-30620-4_20)
## Traitor Tracing with N1/3-Size Ciphertexts and O(1)-Size Keys from k-Lin.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#traitor-tracing-with-n1-3-size-ciphertexts-and-o-1-size-keys-from-k-lin)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#traitor-tracing-with-n1-3-size-ciphertexts-and-o-1-size-keys-from-k-lin)
### Authors
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Hoeteck Wee, NTT Research, Sunnyvale, USA
### Abstract
> We present a pairing-based traitor tracing scheme for N users with
> 
> This is the first pairing-based scheme to achieve \(| \textsf{pk}| \cdot | \textsf{sk}| \cdot | \textsf{ct}| = o(N)\). Our construction relies on the (bilateral) k-Lin assumption, and achieves private tracing and full collusion resistance. Our result simultaneously improves upon the sizes of \( \textsf{pk}, \textsf{ct}\) in Boneh–Sahai–Waters [Eurocrypt ’06] and the size of \( \textsf{sk}\) in Zhandry [Crypto ’20], while further eliminating the reliance on the generic group model in the latter work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_21](https://doi.org/10.1007/978-3-031-30620-4_21)
