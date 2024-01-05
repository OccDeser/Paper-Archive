# Asiacrypt 20-3
## MOTIF: (Almost) Free Branching in GMW - Via Vector-Scalar Multiplication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> MPC functionalities are increasingly specified in high-level languages, where control-flow constructions such as conditional statements are extensively used. Today, concretely efficient MPC protocols are circuit-based and must evaluate all conditional branches at high cost to hide the taken branch.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_1](https://doi.org/10.1007/978-3-030-64840-4_1)
## Maliciously Secure Matrix Multiplication with Applications to Private Deep Learning.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#maliciously-secure-matrix-multiplication-with-applications-to-private-deep-learning) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#maliciously-secure-matrix-multiplication-with-applications-to-private-deep-learning)**
### 作者
* Hao Chen, Facebook, Menlo Park, USA
* Miran Kim, Ulsan National Institute of Science and Technology, Ulsan, South Korea
* Ilya Razenshteyn, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Dragos Rotaru, imec-COSIC, KU Leuven, Leuven, Belgium
* Dragos Rotaru, Cape Privacy, New York, USA
* Sameer Wagh, Princeton University, Princeton, NJ, USA
* Sameer Wagh, University of California, Berkeley, USA
### 摘要
> Computing on data in a manner that preserve the privacy is of growing importance. Multi-Party Computation (MPC) and Homomorphic Encryption (HE) are two cryptographic techniques for privacy-preserving computations. In this work, we have developed efficient UC-secure multiparty protocols for matrix multiplications and two-dimensional convolutions. We built upon the SPDZ framework and integrated the state-of-the-art HE algorithms for matrix multiplication. Our protocol achieved communication cost linear only in the input and output dimensions and not on the number of multiplication operations. We eliminate the “triple sacrifice” step of SPDZ to improve efficiency and simplify the zero-knowledge proofs. We implemented our protocols and benchmarked them against the SPDZ LowGear variant (Keller et al. Eurocrypt’18). For multiplying two square matrices of size 128, we reduced the communication cost from 1.54 GB to 12.46 MB, an improvement of over two orders of magnitude that only improves with larger matrix sizes. For evaluating all convolution layers of the ResNet-50 neural network, the communication reduces cost from 5 TB to 41 GB.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_2](https://doi.org/10.1007/978-3-030-64840-4_2)
## On the Exact Round Complexity of Best-of-Both-Worlds Multi-party Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation)**
### 作者
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Divya Ravi, Indian Institute of Science, Bangalore, India
* Swati Singla, Google India, Bangalore, India
### 摘要
> The two traditional streams of multiparty computation (MPC) protocols consist of– (a) protocols achieving guaranteed output delivery (\(\textsf {god}\)) or fairness (\(\textsf {fn}\)) in the honest-majority setting and (b) protocols achieving unanimous or selective abort (\(\textsf {ua}\), \(\textsf {sa}\)) in the dishonest-majority setting. The favorable presence of honest majority amongst the participants is necessary to achieve the stronger notions of \(\textsf {god}\) or \(\textsf {fn}\). While the constructions of each type are abound in the literature, one class of protocols does not seem to withstand the threat model of the other. For instance, the honest-majority protocols do not guarantee privacy of the inputs of the honest parties in the face of dishonest majority and likewise the dishonest-majority protocols cannot achieve \(\textsf {god}\) and \(\textsf {fn}\), tolerating even a single corruption, let alone dishonest minority. The promise of the unconventional yet much sought-after species of MPC, termed as ‘Best-of-Both-Worlds’ (BoBW), is to offer the best possible security depending on the actual corruption scenario.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_3](https://doi.org/10.1007/978-3-030-64840-4_3)
## MPC with Synchronous Security and Asynchronous Responsiveness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#mpc-with-synchronous-security-and-asynchronous-responsiveness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#mpc-with-synchronous-security-and-asynchronous-responsiveness)**
### 作者
* Chen-Da Liu-Zhang, ETH Zurich, Zurich, Switzerland
* Ueli Maurer, ETH Zurich, Zurich, Switzerland
* Julian Loss, University of Maryland, College Park, USA
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Daniel Tschudi, Concordium, Zurich, Switzerland
### 摘要
> Two paradigms for secure MPC are synchronous and asynchronous protocols. While synchronous protocols tolerate more corruptions and allow every party to give its input, they are very slow because the speed depends on the conservatively assumed worst-case delay \(\varDelta \) of the network. In contrast, asynchronous protocols allow parties to obtain output as fast as the actual network allows, a property called responsiveness, but unavoidably have lower resilience and parties with slow network connections cannot give input.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_4](https://doi.org/10.1007/978-3-030-64840-4_4)
## Secure MPC: Laziness Leads to GOD.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#secure-mpc-laziness-leads-to-god) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#secure-mpc-laziness-leads-to-god)**
### 作者
* Saikrishna Badrinarayanan, Visa Research, Palo Alto, USA
* Aayush Jain, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
* Nathan Manohar, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
* Amit Sahai, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
### 摘要
> Motivated by what we call “honest but lazy” parties in the context of secure multi party computation, we revisit the notion of multi-key FHE schemes (MFHE). In MFHE, any message encrypted using a public key \(pk_i\) can be “expanded” so that the resulting ciphertext is encrypted with respect to a set of public keys \((pk_1,..,pk_n)\). Such expanded ciphertexts can be homomorphically evaluated with respect to any circuit to generate a ciphertext \(ct\). Then, this ciphertext \(ct\) can be partially decrypted using a secret key \(sk_i\) (corresponding to the public key \(pk_i\)) to produce a partial decryption \(p_i\). Finally, these partial decryptions \(\{p_{i}\}_{i\in [n]}\) can be combined to recover the output. However, this definition of MFHE works only for n-out-of-n access structures and, thus, each node in the system is a point of failure. In the context of “honest but lazy” parties, it is necessary to be able to decrypt even when only given a subset of partial decryptions (say t out of n). In order to solve this problem, we introduce a new notion of multi-key FHE designed to handle arbitrary access patterns that can reconstruct the output. We call it a threshold multi-key FHE scheme (TMFHE).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_5](https://doi.org/10.1007/978-3-030-64840-4_5)
## Asymptotically Good Multiplicative LSSS over Galois Rings and Applications to MPC over $\mathbb {Z}/p^k\mathbb {Z} $.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#asymptotically-good-multiplicative-lsss-over-galois-rings-and-applications-to-mpc-over-mathbb-z-p-k-mathbb-z) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#asymptotically-good-multiplicative-lsss-over-galois-rings-and-applications-to-mpc-over-mathbb-z-p-k-mathbb-z)**
### 作者
* Mark Abspoel, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Ronald Cramer, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Chen Yuan, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Ronald Cramer, Mathematisch Instituut, Leiden University, Leiden, The Netherlands
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Daniel Escudero, Aarhus University, Aarhus, Denmark
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiaotong University, Shanghai, China
### 摘要
> We study information-theoretic multiparty computation (MPC) protocols over rings \(\mathbb {Z}/p^k\mathbb {Z} \) that have good asymptotic communication complexity for a large number of players. An important ingredient for such protocols is arithmetic secret sharing, i.e., linear secret-sharing schemes with multiplicative properties. The standard way to obtain these over fields is with a family of linear codes C, such that C, \(C^\perp \) and \(C^2\) are asymptotically good (strongly multiplicative). For our purposes here it suffices if the square code \(C^2\) is not the whole space, i.e., has codimension at least 1 (multiplicative).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_6](https://doi.org/10.1007/978-3-030-64840-4_6)
## Towards Efficiency-Preserving Round Compression in MPC - Do Fewer Rounds Mean More Computation?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#towards-efficiency-preserving-round-compression-in-mpc-do-fewer-rounds-mean-more-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#towards-efficiency-preserving-round-compression-in-mpc-do-fewer-rounds-mean-more-computation)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> Reducing the rounds of interaction in secure multiparty computation (MPC) protocols has been the topic of study of many works. One popular approach to reduce rounds is to construct round compression compilers. A round compression compiler is one that takes a highly interactive protocol and transforms it into a protocol with far fewer rounds. The design of round compression compilers has traditionally focused on preserving the security properties of the underlying protocol and in particular, not much attention has been given towards preserving their computational and communication efficiency. Indeed, the recent round compression compilers that yield round-optimal MPC protocols incur large computational and communication overhead.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_7](https://doi.org/10.1007/978-3-030-64840-4_7)
## Circuit Amortization Friendly Encodingsand Their Application to Statistically Secure Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation)**
### 作者
* Anders Dalskov, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Eysa Lee, Northeastern University, Boston, USA
### 摘要
> At CRYPTO 2018, Cascudo et al. introduced Reverse Multiplication Friendly Embeddings (RMFEs). These are a mechanism to compute \(\delta \) parallel evaluations of the same arithmetic circuit over a field \(\mathbb {F}_q\) at the cost of a single evaluation of that circuit in \(\mathbb {F}_{q^d}\), where \(\delta < d\). Due to this inequality, RMFEs are a useful tool when protocols require to work over \(\mathbb {F}_{q^d}\) but one is only interested in computing over \(\mathbb {F}_q\). In this work we introduce Circuit Amortization Friendly Encodings (CAFEs), which generalize RMFEs while having concrete efficiency in mind. For a Galois Ring \(R = GR(2^{k},d)\), CAFEs allow to compute certain circuits over \(\mathbb {Z}_{2^k}\) at the cost of a single secure multiplication in R. We present three CAFE instantiations, which we apply to the protocol for MPC over \(\mathbb {Z}_{2^k}\) via Galois Rings by Abspoel et al. (TCC 2019). Our protocols allow for efficient switching between the different CAFEs, as well as between computation over \(GR(2^{k},d)\) and \(\mathbb {F}_{2^{d}}\) in a way that preserves the CAFE in both rings. This adaptability leads to efficiency gains for e.g. Machine Learning applications, which can be represented as highly parallel circuits over \(\mathbb {Z}_{2^k}\) followed by bit-wise operations. From an implementation of our techniques, we estimate that an SVM can be evaluated on 250 images in parallel up to \(\times 7\) more efficiently using our techniques, compared to the protocol from Abspoel et al. (TCC 2019).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_8](https://doi.org/10.1007/978-3-030-64840-4_8)
## Efficient Fully Secure Computation via Distributed Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#efficient-fully-secure-computation-via-distributed-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#efficient-fully-secure-computation-via-distributed-zero-knowledge-proofs)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion Univeristy, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### 摘要
> Secure computation protocols enable mutually distrusting parties to compute a function of their private inputs while revealing nothing but the output. Protocols with full security (also known as guaranteed output delivery) in particular protect against denial-of-service attacks, guaranteeing that honest parties receive a correct output. This feature can be realized in the presence of an honest majority, and significant research effort has gone toward attaining full security with good asymptotic and concrete efficiency.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_9](https://doi.org/10.1007/978-3-030-64840-4_9)
## Efficient and Round-Optimal Oblivious Transfer and Commitment with Adaptive Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Pratik Sarkar, Boston University, Boston, USA
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> We construct the most efficient two-round adaptively secure bit-OT in the Common Random String (\(\text {CRS} \)) model. The scheme is UC secure under the Decisional Diffie-Hellman (DDH) assumption. It incurs \(\mathcal {O}(1)\) exponentiations and sends \(\mathcal {O}(1)\) group elements, whereas the state of the art requires \(\mathcal {O}(\kappa ^2)\) exponentiations and communicates \(\text {poly}(\kappa )\) bits, where \(\kappa \) is the computational security parameter. Along the way, we obtain several other efficient UC-secure OT protocols under DDH:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_10](https://doi.org/10.1007/978-3-030-64840-4_10)
## ALBATROSS: Publicly AttestabLe BATched Randomness Based On Secret Sharing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> In this paper we present ALBATROSS, a family of multiparty randomness generation protocols with guaranteed output delivery and public verification that allows to trade off corruption tolerance for a much improved amortized computational complexity. Our basic stand alone protocol is based on publicly verifiable secret sharing (PVSS) and is secure under in the random oracle model under the decisional Diffie-Hellman (DDH) hardness assumption. We also address the important issue of constructing Universally Composable randomness beacons, showing two UC versions of Albatross: one based on simple UC NIZKs and another one based on novel efficient “designated verifier” homomorphic commitments. Interestingly this latter version can be instantiated from a global random oracle under the weaker Computational Diffie-Hellman (CDH) assumption. An execution of ALBATROSS with n parties, out of which up to \(t=(1/2-\epsilon )\cdot n\) are corrupt for a constant \(\epsilon >0\), generates \(\varTheta (n^2)\) uniformly random values, requiring in the worst case an amortized cost per party of \(\varTheta (\log n)\) exponentiations per random value. We significantly improve on the SCRAPE protocol (Cascudo and David, ACNS 17), which required \(\varTheta (n^2)\) exponentiations per party to generate one uniformly random value. This is mainly achieved via two techniques: first, the use of packed Shamir secret sharing for the PVSS; second, the use of linear t-resilient functions (computed via a Fast Fourier Transform-based algorithm) to improve the randomness extraction.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_11](https://doi.org/10.1007/978-3-030-64840-4_11)
## Secret-Shared Shuffle.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#secret-shared-shuffle) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#secret-shared-shuffle)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Esha Ghosh, Microsoft Research, Redmond, USA
* Oxana Poburinnaya, University of Rochester/Ligero Inc., Rochester, USA
### 摘要
> Generating additive secret shares of a shuffled dataset - such that neither party knows the order in which it is permuted - is a fundamental building block in many protocols, such as secure collaborative filtering, oblivious sorting, and secure function evaluation on set intersection. Traditional approaches to this problem either involve expensive public-key based crypto or using symmetric crypto on permutation networks. While public-key-based solutions are bandwidth efficient, they are computation-heavy. On the other hand, constructions based on permutation networks are communication-bound, especially when the dataset contains large elements, for e.g., feature vectors in an ML context.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_12](https://doi.org/10.1007/978-3-030-64840-4_12)
## Adaptively Secure Inner Product Encryption from LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#adaptively-secure-inner-product-encryption-from-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#adaptively-secure-inner-product-encryption-from-lwe)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> Attribute-based encryption (ABE) is an advanced form of encryption scheme allowing for access policies to be embedded within the secret keys and ciphertexts. By now, we have ABEs supporting numerous types of policies based on hardness assumptions over bilinear maps and lattices. However, one of the distinguishing differences between ABEs based on these two breeds of assumptions is that the former can achieve adaptive security for quite expressible policies (e.g., inner-products, boolean formula) while the latter can not. Recently, two adaptively secure lattice-based ABEs have appeared and changed the state of affairs: a non-zero inner-product (NIPE) encryption by Katsumata and Yamada (PKC’19) and an ABE for t-CNF policies by Tsabary (CRYPTO’19). However, the policies supported by these ABEs are still quite limited and do not embrace the more interesting policies that have been studied in the literature. Notably, constructing an adaptively secure inner-product encryption (IPE) based on lattices still remains open.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_13](https://doi.org/10.1007/978-3-030-64840-4_13)
## Unbounded Dynamic Predicate Compositions in ABE from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### 摘要
> At Eurocrypt’19, Attrapadung presented several transformations that dynamically compose a set of attribute-based encryption (ABE) schemes for simpler predicates into a new ABE scheme for more expressive predicates. Due to the powerful unbounded and modular nature of his compositions, many new ABE schemes can be obtained in a systematic manner. However, his approach heavily relies on q-type assumptions, which are not standard. Devising such powerful compositions from standard assumptions was left as an important open problem. In this paper, we present a new framework for constructing ABE schemes that allow unbounded and dynamic predicate compositions among them, and show that the adaptive security of these composed ABE will be preserved by relying only on the standard matrix Diffie-Hellman (MDDH) assumption. This thus resolves the open problem posed by Attrapadung. As for applications, we obtain various ABEs that are the first such instantiations of their kinds from standard assumptions. These include the following adaptively secure large-universe ABEs for Boolean formulae under MDDH:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_14](https://doi.org/10.1007/978-3-030-64840-4_14)
## Succinct and Adaptively Secure ABE for ABP from k-Lin.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### 摘要
> We present succinct and adaptively secure attribute-based encryption (ABE) schemes for arithmetic branching programs, based on k-Lin in pairing groups. Our key-policy ABE scheme has ciphertexts of constant size, independent of the length of the attributes, and our ciphertext-policy ABE scheme has secret keys of constant size. Our schemes improve upon the recent succinct ABE schemes in [Tomida and Attrapadung, ePrint ’20], which only handles Boolean formulae. All other prior succinct ABE schemes either achieve only selective security or rely on q-type assumptions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_15](https://doi.org/10.1007/978-3-030-64840-4_15)
## Inner-Product Functional Encryption with Fine-Grained Access Control.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#inner-product-functional-encryption-with-fine-grained-access-control) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#inner-product-functional-encryption-with-fine-grained-access-control)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, Inria, Paris, France
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Romain Gay, IBM Zurich, Zurich, Switzerland
* Bogdan Ursu, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> We construct new functional encryption schemes that combine the access control functionality of attribute-based encryption with the possibility of performing linear operations on the encrypted data. While such a primitive could be easily realized from fully fledged functional encryption schemes, what makes our result interesting is the fact that our schemes simultaneously achieve all the following properties. They are public-key, efficient and can be proved secure under standard and well established assumptions (such as LWE or pairings). Furthermore, security is guaranteed in the setting where adversaries are allowed to get functional keys that decrypt the challenge ciphertext. Our first results are two functional encryption schemes for the family of functions that allow users to embed policies (expressed by monotone span programs) in the encrypted data, so that one can generate functional keys to compute weighted sums on the latter. Both schemes are pairing-based and quite generic: they combine the ALS functional encryption scheme for inner products from Crypto 2016 with any attribute-based encryption schemes relying on the dual-system encryption methodology. As an additional bonus, they yield simple and elegant multi-input extensions essentially for free, thereby broadening the set of applications for such schemes. Multi-input is a particularly desirable feature in our setting, since it gives a finer access control over the encrypted data, by allowing users to associate different access policies to different parts of the encrypted data. Our second result builds identity-based functional encryption for inner products from lattices. This is achieved by carefully combining existing IBE schemes from lattices with adapted, LWE-based, variants of ALS. We point out to intrinsic technical bottlenecks to obtain richer forms of access control from lattices. From a conceptual point of view, all our results can be seen as further evidence that more expressive forms of functional encryption can be realized under standard assumptions and with little computational overhead.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_16](https://doi.org/10.1007/978-3-030-64840-4_16)
## MoniPoly - An Expressive q-SDH-Based Anonymous Attribute-Based Credential System.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system)**
### 作者
* Syh-Yuan Tan, School of Computing, Newcastle University, Newcastle upon Tyne, UK
* Thomas Groß, School of Computing, Newcastle University, Newcastle upon Tyne, UK
### 摘要
> Modern attribute-based anonymous credential (ABC) systems benefit from special encodings that yield expressive and highly efficient show proofs on logical statements. The technique was first proposed by Camenisch and Groß, who constructed an SRSA-based ABC system with prime-encoded attributes that offers efficient AND, OR and NOT proofs. While other ABC frameworks have adopted constructions in the same vein, the Camenisch-Groß ABC has been the most expressive and asymptotically most efficient proof system to date, even if it was constrained by the requirement of a trusted message-space setup and an inherent restriction to finite-set attributes encoded as primes. In this paper, combining a new set commitment scheme and an SDH-based signature scheme, we present a provably secure ABC system that supports show proofs for complex statements. This construction is not only more expressive than existing approaches, but it is also highly efficient under unrestricted attribute space due to its ECC protocols only requiring a constant number of bilinear pairings by the verifier; none by the prover. Furthermore, we introduce strong security models for impersonation and unlinkability under adaptive active and concurrent attacks to allow for the expressiveness of our ABC as well as for a systematic comparison to existing schemes. Given this foundation, we are the first to comprehensively formally prove the security of an ABC with expressive show proofs. Specifically, building upon the q-(co-)SDH assumption, we prove the security against impersonation with a tight reduction. Besides the set commitment scheme, which may be of independent interest, our security models can serve as a foundation for the design of future ABC systems.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_17](https://doi.org/10.1007/978-3-030-64840-4_17)
## The Direction of Updatable Encryption Does Not Matter Much.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#the-direction-of-updatable-encryption-does-not-matter-much) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#the-direction-of-updatable-encryption-does-not-matter-much)**
### 作者
* Yao Jiang, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
### 摘要
> Updatable encryption schemes allow for key rotation on ciphertexts. A client outsourcing storage of encrypted data to a cloud server can change its encryption key. The cloud server can update the stored ciphertexts to the new key using only a token provided by the client.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_18](https://doi.org/10.1007/978-3-030-64840-4_18)
## Improving Speed and Security in Updatable Encryption Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#improving-speed-and-security-in-updatable-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#improving-speed-and-security-in-updatable-encryption-schemes)**
### 作者
* Dan Boneh, Stanford University, Stanford, CA, USA
* Saba Eskandarian, Stanford University, Stanford, CA, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Sam Kim, Simons Institute for the Theory of Computing, Berkeley, CA, USA
* Maurice Shih, Cisco Systems, San Jose, CA, USA
### 摘要
> Periodic key rotation is a common practice designed to limit the long-term power of cryptographic keys. Key rotation refers to the process of re-encrypting encrypted content under a fresh key, and overwriting the old ciphertext with the new one. When encrypted data is stored in the cloud, key rotation can be very costly: it may require downloading the entire encrypted content from the cloud, re-encrypting it on the client’s machine, and uploading the new ciphertext back to the cloud.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_19](https://doi.org/10.1007/978-3-030-64840-4_19)
## CCA Updatable Encryption Against Malicious Re-encryption Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#cca-updatable-encryption-against-malicious-re-encryption-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#cca-updatable-encryption-against-malicious-re-encryption-attacks)**
### 作者
* Long Chen, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Yanan Li, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Qiang Tang, New Jersey Institute of Technology, Newark, NJ, 07102, USA
### 摘要
> Updatable encryption (UE) is an attractive primitive, which allows the secret key of the outsourced encrypted data to be updated to a fresh one periodically. Several elegant works exist studying various security properties. We notice several major issues in existing security models of (ciphertext dependent) updatable encryption, in particular, integrity and CCA security. The adversary in the models is only allowed to request the server to re-encrypt honestly generated ciphertext, while in practice, an attacker could try to inject arbitrary ciphertexts into the server as she wishes. Those malformed ciphertext could be updated and leveraged by the adversary and cause serious security issues.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_20](https://doi.org/10.1007/978-3-030-64840-4_20)
## Determining the Core Primitive for Optimally Secure Ratcheting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#determining-the-core-primitive-for-optimally-secure-ratcheting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#determining-the-core-primitive-for-optimally-secure-ratcheting)**
### 作者
* Fatih Balli, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Serge Vaudenay, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Paul Rösler, Chair for Network and Data Security, Ruhr University Bochum, Bochum, Germany
### 摘要
> After ratcheting attracted attention mostly due to practical real-world protocols, recently a line of work studied ratcheting as a primitive from a theoretic point of view. Literature in this line, pursuing the strongest security of ratcheting one can hope for, utilized for constructions strong, yet inefficient key-updatable primitives – based on hierarchical identity based encryption (HIBE). As none of these works formally justified utilizing these building blocks, we answer the yet open question under which conditions their use is actually necessary.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_21](https://doi.org/10.1007/978-3-030-64840-4_21)
## Cryptography from One-Way Communication: On Completeness of Finite Channels.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#cryptography-from-one-way-communication-on-completeness-of-finite-channels) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#cryptography-from-one-way-communication-on-completeness-of-finite-channels)**
### 作者
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Varun Narayanan, Tata Institute of Fundamental Research, Mumbai, India
* Vinod Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
* Alon Rosen, IDC Herzliya, Herzliya, Israel
### 摘要
> Garg et al. (Crypto 2015) initiated the study of cryptographic protocols over noisy channels in the non-interactive setting, namely when only one party speaks. A major question left open by this work is the completeness of finite channels, whose input and output alphabets do not grow with the desired level of security. In this work, we address this question by obtaining the following results:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_22](https://doi.org/10.1007/978-3-030-64840-4_22)
## Succinct Functional Commitment for a Large Class of Arithmetic Circuits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits)**
### 作者
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Kateryna Pavlyk, Simula UiB, Bergen, Norway
### 摘要
> A succinct functional commitment (SFC) scheme for a circuit class \(\mathbf {CC}\) enables, for any circuit \(\mathcal {C}\in \mathbf {CC}\), the committer to first succinctly commit to a vector \(\varvec{\alpha }\), and later succinctly open the commitment to \(\mathcal {C}(\varvec{\alpha }, \varvec{\beta })\), where the verifier chooses \(\varvec{\beta }\) at the time of opening. Unfortunately, SFC commitment schemes are known only for severely limited function classes like the class of inner products. By making non-black-box use of SNARK-construction techniques, we propose a SFC scheme for the large class of semi-sparse polynomials. The new SFC scheme can be used to, say, efficiently (1) implement sparse polynomials, and (2) aggregate various interesting SFC (e.g., vector commitment and polynomial commitment) schemes. The new scheme is evaluation-binding under a new instantiation of the computational uber-assumption. We provide a thorough analysis of the new assumption.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_23](https://doi.org/10.1007/978-3-030-64840-4_23)
## Crowd Verifiable Zero-Knowledge and End-to-End Verifiable Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#crowd-verifiable-zero-knowledge-and-end-to-end-verifiable-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#crowd-verifiable-zero-knowledge-and-end-to-end-verifiable-multiparty-computation)**
### 作者
* Foteini Baldimtsi, George Mason University, Fairfax, USA
* Aggelos Kiayias, The University of Edinburgh, Edinburgh, UK
* Thomas Zacharias, The University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, IOHK, Hong Kong, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies, Hangzhou, China
### 摘要
> Auditing a secure multiparty computation (MPC) protocol entails the validation of the protocol transcript by a third party that is otherwise untrusted. In this work, we introduce the concept of end-to-end verifiable MPC (VMPC), that requires the validation to provide a correctness guarantee even in the setting that all servers, trusted setup primitives and all the client systems utilized by the input-providing users of the MPC protocol are subverted by an adversary. To instantiate VMPC, we introduce a new concept in the setting of zero-knowlegde protocols that we term crowd verifiable zero-knowledge (CVZK). A CVZK protocol enables a prover to convince a set of verifiers about a certain statement, even though each one individually contributes a small amount of entropy for verification and some of them are adversarially controlled. Given CVZK, we present a VMPC protocol that is based on discrete-logarithm related assumptions. At the high level of adversity that VMPC is meant to withstand, it is infeasible to ensure perfect correctness, thus we investigate the classes of functions and verifiability relations that are feasible in our framework, and present a number of possible applications the underlying functions of which can be implemented via VMPC.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_24](https://doi.org/10.1007/978-3-030-64840-4_24)
## Non-interactive Composition of Sigma-Protocols via Share-then-Hash.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#non-interactive-composition-of-sigma-protocols-via-share-then-hash) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#non-interactive-composition-of-sigma-protocols-via-share-then-hash)**
### 作者
* Masayuki Abe, NTT Secure Platform Laboratories, Musashino, Japan
* Miguel Ambrona, NTT Secure Platform Laboratories, Musashino, Japan
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Miyako Ohkubo, Security Fundamentals Laboratory, CSR, NICT, Tokyo, Japan
* Alon Rosen, Herzliya Interdisciplinary Center, Herzliya, Israel
### 摘要
> Proofs of partial knowledge demonstrate the possession of certain subsets of witnesses for a given collection of statements \(x_1,\dots ,x_n\). Cramer, Damgård, and Schoenmakers (CDS), built proofs of partial knowledge, given “atomic” protocols for individual statements \(x_i\), by having the prover randomly secret share the verifier’s challenge and using the shares as challenges for the atomic protocols. This simple and highly-influential transformation has been used in numerous applications, ranging from anonymous credentials to ring signatures.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_25](https://doi.org/10.1007/978-3-030-64840-4_25)
## Succinct Diophantine-Satisfiability Arguments.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#succinct-diophantine-satisfiability-arguments) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#succinct-diophantine-satisfiability-arguments)**
### 作者
* Patrick Towa, IBM Research, Zurich, Switzerland
* Patrick Towa, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Patrick Towa, Institut Universitaire de France, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> A Diophantine equation is a multi-variate polynomial equation with integer coefficients, and it is satisfiable if it has a solution with all unknowns taking integer values. Davis, Putnam, Robinson and Matiyasevich showed that the general Diophantine satisfiability problem is undecidable (giving a negative answer to Hilbert’s tenth problem) but it is nevertheless possible to argue in zero-knowledge the knowledge of a solution, if a solution is known to a prover.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_26](https://doi.org/10.1007/978-3-030-64840-4_26)
## Individual Simulations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#individual-simulations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#individual-simulations)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Cryptology, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> We develop an individual simulation technique that explicitly makes use of particular properties/structures of a given adversary’s functionality. Using this simulation technique, we obtain the following results.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_27](https://doi.org/10.1007/978-3-030-64840-4_27)
## KVaC: Key-Value Commitments for Blockchains and Beyond.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#kvac-key-value-commitments-for-blockchains-and-beyond) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#kvac-key-value-commitments-for-blockchains-and-beyond)**
### 作者
* Shashank Agrawal, Western Digital Research, Milpitas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> As blockchains grow in size, validating new transactions becomes more and more resource intensive. To deal with this, there is a need to discover compact encodings of the (effective) state of a blockchain—an encoding that allows for efficient proofs of membership and updates. In the case of account-based cryptocurrencies, the state can be represented by a key-value map, where keys are the account addresses and values consist of account balance, nonce, etc.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_28](https://doi.org/10.1007/978-3-030-64840-4_28)
## Catalic: Delegated PSI Cardinality with Applications to Contact Tracing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt%2020-3.md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt%2020-3.md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing)**
### 作者
* Thai Duong, Google LLC, Menlo Park, USA
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Ni Trieu, Arizona State University, Tempe, USA
### 摘要
> Private Set Intersection Cardinality (PSI-CA) allows two parties, each holding a set of items, to learn the size of the intersection of those sets without revealing any additional information. To the best of our knowledge, this work presents the first protocol that allows one of the parties to delegate PSI-CA computation to untrusted servers. At the heart of our delegated PSI-CA protocol is a new oblivious distributed key PRF (Odk-PRF) abstraction, which may be of independent interest.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_29](https://doi.org/10.1007/978-3-030-64840-4_29)
